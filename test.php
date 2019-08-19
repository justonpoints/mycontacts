<?php

//INCLUDES
date_default_timezone_set("America/New_York");


//Move to separate file
define('OU_API_URL', "http://a.dev02cms.omniupdate.local");
define('OU_USERNAME', "zz-omni");
define('OU_PASSWORD', "123sandbox#@!");
define('OU_ACCOUNT', "1014devcms");
define('OU_SKIN', "qa");

define('OU_PUBLISH_TARGET', "bbbbb");


function pv($var){
    ?><pre><?
        var_dump($var);
    ?></pre><?
}

class OUCAMPUS_API
{
    private $headers;

    const LOGIN_ENDPOINT = "/authentication/login";
    const LIST_SITES_ENDPOINT = "/sites/list";
    const GET_PUBLISH_TARGETS_ENDPOINT = "/sites/targets";
    const PUBLISH_SITE_ENDPOINT = "/sites/publish";
    const UPDATE_SITE_ENDPOINT = "/sites/save";
    const ACCOUNT_VIEW_ENDPOINT = "/accounts/view";
    const LIST_GROUPS_ENDPOINT = "/groups/list";

    public function __construct()
    {
        $this->headers = array(
                            "Content-Type: application/x-www-form-urlencoded",
                            "Cache-Control: no-cache"
                        );
    }

    public function SendCurlRequest($method, $endpoint, $params=null, $gadget_token=null)
    {
        $request_URL = OU_API_URL . $endpoint;

        $paramString = "";
        if(is_array($params))
        {
            if($gadget_token != null)
            {
                $params["authorization_token"] = $gadget_token;
            }
            $paramString = http_build_query($params);
        }
        else if($params != null)
        {
            $paramString = $params;
            if($gadget_token != null)
            {
                $paramString .= "&authorization_token=" . $gadget_token;
            }
        }

        if($paramString != "" && $method == "GET")
        {
            $request_URL .= "?" . $paramString;
        }

        echo $request_URL . "\n";
        echo $paramString . "\n";

        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $request_URL);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_HTTPHEADER, $this->headers);
        if($method == "GET"){
            curl_setopt($curl, CURLOPT_HTTPGET, 1);
        }
        if($method == "POST"){
            curl_setopt($curl, CURLOPT_POST, 1);
            curl_setopt($curl, CURLOPT_POSTFIELDS, $paramString);
        }
        $ret = curl_exec ($curl);
        curl_close ($curl);

        if($ret === false)
        {
            throw new Exception('curl_exec failed in function SendCurlRequest()');
            exit();
        }

        $json = json_decode($ret);

        if($json === null)
        {
            throw new Exception('curl response not in json format in function SendCurlRequest(): '.$ret);
            exit();
        }
        if($gadget_token != null)
            var_dump($json);

        return $json;

    }

    private function GetGadgetToken()
    {
        $params = array(
            "skin" => OU_SKIN,
            "username" => OU_USERNAME,
            "password" => OU_PASSWORD,
            "account" => OU_ACCOUNT
        );

        $retobj = $this->SendCurlRequest("POST", self::LOGIN_ENDPOINT, $params);

        return $retobj->gadget_token;
    }

    public function GetSiteList()
    {
        $siteList = array();

        $gadget_token = $this->GetGadgetToken();

        $params = array(
            "skin" => OU_SKIN,
            "account" => OU_ACCOUNT
        );

        $retobj = $this->SendCurlRequest("GET", self::LIST_SITES_ENDPOINT, $params, $gadget_token);

        foreach ($retobj as $obj)
        {
            $siteList[] = $obj->site;
        }

        return $siteList;
    }

    public function GetPublishTargets($site)
    {
        $gadget_token = $this->GetGadgetToken();

        $params = array(
            "site" => $site
        );

        $retobj = $this->SendCurlRequest("GET", self::GET_PUBLISH_TARGETS_ENDPOINT, $params, $gadget_token);

        return $retobj->targets;
    }

    public function GetAccountInfo($account)
    {
        $gadget_token = $this->GetGadgetToken();

        $params = array(
            "account" => OU_ACCOUNT
        );

        $retobj = $this->SendCurlRequest("GET", self::ACCOUNT_VIEW_ENDPOINT, $params, $gadget_token);

        return $retobj;
    }

    public function PublishSite($site, $target=null)
    {
        $gadget_token = $this->GetGadgetToken();

        if($target == null)
        {
            $target = OU_PUBLISH_TARGET;
        }

        $log = "Deployment republish by automated script at " . date('Y-m-d H:i:s');

        $params = array(
            "site" => $site,
            "last_published" => true,
            "log" => $log,
            "target" => $target,
            "exclude_bin" => true
        );

        $retobj = $this->SendCurlRequest("POST", self::PUBLISH_SITE_ENDPOINT, $params, $gadget_token);
//        pv($retobj);

        return;
    }

    public function UpdateSite($site)
    {
        $gadget_token = $this->GetGadgetToken();

        $params = array(
            "site" => $site,
            "available_to" => "",
            "button_code" => "<a id=\"de\" href=\"^0\">©</a>",
        );

        $retobj = $this->SendCurlRequest("POST", self::UPDATE_SITE_ENDPOINT, $params, $gadget_token);
        pv($retobj);

        return;
    }

    public function ReleaseProdServer($site)
    {
        $gadget_token = $this->GetGadgetToken();

        $params = array(
            "site" => $site,
            "available_to" => "Everyone",
        );

        $retobj = $this->SendCurlRequest("POST", self::UPDATE_SITE_ENDPOINT, $params, $gadget_token);
        pv($retobj);

        return;
    }


    public function GetGroupList()
    {
        $groupList = array();

        $gadget_token = $this->GetGadgetToken();

        $params = array(
        );

        $retobj = $this->SendCurlRequest("GET", self::LIST_GROUPS_ENDPOINT, $params, $gadget_token);

        foreach ($retobj as $obj)
        {
            $groupList[] = $obj->name;
        }

        return $groupList;
    }
}

?>
