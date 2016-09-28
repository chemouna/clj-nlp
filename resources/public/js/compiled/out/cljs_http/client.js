// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__44269__auto__ = v;
if(cljs.core.truth_(and__44269__auto__)){
return (v > (0));
} else {
return and__44269__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__46568_SHARP_,p2__46567_SHARP_){
var vec__46572 = clojure.string.split.call(null,p2__46567_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__46572,(0),null);
var v = cljs.core.nth.call(null,vec__46572,(1),null);
return cljs.core.assoc.call(null,p1__46568_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__46575_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__46575_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__46576){
var vec__46580 = p__46576;
var k = cljs.core.nth.call(null,vec__46580,(0),null);
var v = cljs.core.nth.call(null,vec__46580,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__46583_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__46583_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__44269__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__44269__auto__){
var and__44269__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__44269__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__44269__auto____$1;
}
} else {
return and__44269__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__46584_SHARP_){
return cljs_http.client.decode_body.call(null,p1__46584_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__45363__auto__ = [];
var len__45356__auto___46591 = arguments.length;
var i__45357__auto___46592 = (0);
while(true){
if((i__45357__auto___46592 < len__45356__auto___46591)){
args__45363__auto__.push((arguments[i__45357__auto___46592]));

var G__46593 = (i__45357__auto___46592 + (1));
i__45357__auto___46592 = G__46593;
continue;
} else {
}
break;
}

var argseq__45364__auto__ = ((((1) < args__45363__auto__.length))?(new cljs.core.IndexedSeq(args__45363__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45364__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__46587){
var vec__46588 = p__46587;
var default_headers = cljs.core.nth.call(null,vec__46588,(0),null);
return ((function (vec__46588,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__44281__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__44281__auto__)){
return or__44281__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__46588,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq46585){
var G__46586 = cljs.core.first.call(null,seq46585);
var seq46585__$1 = cljs.core.next.call(null,seq46585);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__46586,seq46585__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__45363__auto__ = [];
var len__45356__auto___46600 = arguments.length;
var i__45357__auto___46601 = (0);
while(true){
if((i__45357__auto___46601 < len__45356__auto___46600)){
args__45363__auto__.push((arguments[i__45357__auto___46601]));

var G__46602 = (i__45357__auto___46601 + (1));
i__45357__auto___46601 = G__46602;
continue;
} else {
}
break;
}

var argseq__45364__auto__ = ((((1) < args__45363__auto__.length))?(new cljs.core.IndexedSeq(args__45363__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45364__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__46596){
var vec__46597 = p__46596;
var accept = cljs.core.nth.call(null,vec__46597,(0),null);
return ((function (vec__46597,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__44281__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__44281__auto__)){
return or__44281__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__46597,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq46594){
var G__46595 = cljs.core.first.call(null,seq46594);
var seq46594__$1 = cljs.core.next.call(null,seq46594);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__46595,seq46594__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__45363__auto__ = [];
var len__45356__auto___46609 = arguments.length;
var i__45357__auto___46610 = (0);
while(true){
if((i__45357__auto___46610 < len__45356__auto___46609)){
args__45363__auto__.push((arguments[i__45357__auto___46610]));

var G__46611 = (i__45357__auto___46610 + (1));
i__45357__auto___46610 = G__46611;
continue;
} else {
}
break;
}

var argseq__45364__auto__ = ((((1) < args__45363__auto__.length))?(new cljs.core.IndexedSeq(args__45363__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45364__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__46605){
var vec__46606 = p__46605;
var content_type = cljs.core.nth.call(null,vec__46606,(0),null);
return ((function (vec__46606,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__44281__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__44281__auto__)){
return or__44281__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__46606,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq46603){
var G__46604 = cljs.core.first.call(null,seq46603);
var seq46603__$1 = cljs.core.next.call(null,seq46603);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__46604,seq46603__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__46614 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__46614__$1 = ((((!((map__46614 == null)))?((((map__46614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46614):map__46614);
var encoding = cljs.core.get.call(null,map__46614__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__46614__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__46620 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__46620__$1 = ((((!((map__46620 == null)))?((((map__46620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46620):map__46620);
var decoding = cljs.core.get.call(null,map__46620__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__46620__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__46620,map__46620__$1,decoding,decoding_opts){
return (function (p1__46616_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__46616_SHARP_,decoding,decoding_opts);
});})(map__46620,map__46620__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__46620,map__46620__$1,decoding,decoding_opts,transit_decode){
return (function (p1__46617_SHARP_){
return cljs_http.client.decode_body.call(null,p1__46617_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__46620,map__46620__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__46622_SHARP_){
return cljs_http.client.decode_body.call(null,p1__46622_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__46626){
var map__46627 = p__46626;
var map__46627__$1 = ((((!((map__46627 == null)))?((((map__46627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46627):map__46627);
var req = map__46627__$1;
var query_params = cljs.core.get.call(null,map__46627__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__46632){
var map__46633 = p__46632;
var map__46633__$1 = ((((!((map__46633 == null)))?((((map__46633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46633):map__46633);
var request = map__46633__$1;
var form_params = cljs.core.get.call(null,map__46633__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__46633__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__46633__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__44269__auto__ = form_params;
if(cljs.core.truth_(and__44269__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__44269__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__46645_46655 = cljs.core.seq.call(null,params);
var chunk__46646_46656 = null;
var count__46647_46657 = (0);
var i__46648_46658 = (0);
while(true){
if((i__46648_46658 < count__46647_46657)){
var vec__46649_46659 = cljs.core._nth.call(null,chunk__46646_46656,i__46648_46658);
var k_46660 = cljs.core.nth.call(null,vec__46649_46659,(0),null);
var v_46661 = cljs.core.nth.call(null,vec__46649_46659,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_46661)){
form_data.append(cljs.core.name.call(null,k_46660),cljs.core.first.call(null,v_46661),cljs.core.second.call(null,v_46661));
} else {
form_data.append(cljs.core.name.call(null,k_46660),v_46661);
}

var G__46662 = seq__46645_46655;
var G__46663 = chunk__46646_46656;
var G__46664 = count__46647_46657;
var G__46665 = (i__46648_46658 + (1));
seq__46645_46655 = G__46662;
chunk__46646_46656 = G__46663;
count__46647_46657 = G__46664;
i__46648_46658 = G__46665;
continue;
} else {
var temp__4657__auto___46666 = cljs.core.seq.call(null,seq__46645_46655);
if(temp__4657__auto___46666){
var seq__46645_46667__$1 = temp__4657__auto___46666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46645_46667__$1)){
var c__45092__auto___46668 = cljs.core.chunk_first.call(null,seq__46645_46667__$1);
var G__46669 = cljs.core.chunk_rest.call(null,seq__46645_46667__$1);
var G__46670 = c__45092__auto___46668;
var G__46671 = cljs.core.count.call(null,c__45092__auto___46668);
var G__46672 = (0);
seq__46645_46655 = G__46669;
chunk__46646_46656 = G__46670;
count__46647_46657 = G__46671;
i__46648_46658 = G__46672;
continue;
} else {
var vec__46652_46673 = cljs.core.first.call(null,seq__46645_46667__$1);
var k_46674 = cljs.core.nth.call(null,vec__46652_46673,(0),null);
var v_46675 = cljs.core.nth.call(null,vec__46652_46673,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_46675)){
form_data.append(cljs.core.name.call(null,k_46674),cljs.core.first.call(null,v_46675),cljs.core.second.call(null,v_46675));
} else {
form_data.append(cljs.core.name.call(null,k_46674),v_46675);
}

var G__46676 = cljs.core.next.call(null,seq__46645_46667__$1);
var G__46677 = null;
var G__46678 = (0);
var G__46679 = (0);
seq__46645_46655 = G__46676;
chunk__46646_46656 = G__46677;
count__46647_46657 = G__46678;
i__46648_46658 = G__46679;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__46683){
var map__46684 = p__46683;
var map__46684__$1 = ((((!((map__46684 == null)))?((((map__46684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46684):map__46684);
var request = map__46684__$1;
var multipart_params = cljs.core.get.call(null,map__46684__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__46684__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__44269__auto__ = multipart_params;
if(cljs.core.truth_(and__44269__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__44269__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__46686_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__46686_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__46691){
var map__46692 = p__46691;
var map__46692__$1 = ((((!((map__46692 == null)))?((((map__46692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46692):map__46692);
var req = map__46692__$1;
var query_params = cljs.core.get.call(null,map__46692__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__46692,map__46692__$1,req,query_params){
return (function (p1__46687_SHARP_){
return cljs.core.merge.call(null,p1__46687_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__46692,map__46692__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__45363__auto__ = [];
var len__45356__auto___46700 = arguments.length;
var i__45357__auto___46701 = (0);
while(true){
if((i__45357__auto___46701 < len__45356__auto___46700)){
args__45363__auto__.push((arguments[i__45357__auto___46701]));

var G__46702 = (i__45357__auto___46701 + (1));
i__45357__auto___46701 = G__46702;
continue;
} else {
}
break;
}

var argseq__45364__auto__ = ((((1) < args__45363__auto__.length))?(new cljs.core.IndexedSeq(args__45363__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45364__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__46696){
var vec__46697 = p__46696;
var credentials = cljs.core.nth.call(null,vec__46697,(0),null);
return ((function (vec__46697,credentials){
return (function (req){
var credentials__$1 = (function (){var or__44281__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__44281__auto__)){
return or__44281__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__46697,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq46694){
var G__46695 = cljs.core.first.call(null,seq46694);
var seq46694__$1 = cljs.core.next.call(null,seq46694);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__46695,seq46694__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__45363__auto__ = [];
var len__45356__auto___46709 = arguments.length;
var i__45357__auto___46710 = (0);
while(true){
if((i__45357__auto___46710 < len__45356__auto___46709)){
args__45363__auto__.push((arguments[i__45357__auto___46710]));

var G__46711 = (i__45357__auto___46710 + (1));
i__45357__auto___46710 = G__46711;
continue;
} else {
}
break;
}

var argseq__45364__auto__ = ((((1) < args__45363__auto__.length))?(new cljs.core.IndexedSeq(args__45363__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45364__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__46705){
var vec__46706 = p__46705;
var req = cljs.core.nth.call(null,vec__46706,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq46703){
var G__46704 = cljs.core.first.call(null,seq46703);
var seq46703__$1 = cljs.core.next.call(null,seq46703);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__46704,seq46703__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__45363__auto__ = [];
var len__45356__auto___46718 = arguments.length;
var i__45357__auto___46719 = (0);
while(true){
if((i__45357__auto___46719 < len__45356__auto___46718)){
args__45363__auto__.push((arguments[i__45357__auto___46719]));

var G__46720 = (i__45357__auto___46719 + (1));
i__45357__auto___46719 = G__46720;
continue;
} else {
}
break;
}

var argseq__45364__auto__ = ((((1) < args__45363__auto__.length))?(new cljs.core.IndexedSeq(args__45363__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45364__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__46714){
var vec__46715 = p__46714;
var req = cljs.core.nth.call(null,vec__46715,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq46712){
var G__46713 = cljs.core.first.call(null,seq46712);
var seq46712__$1 = cljs.core.next.call(null,seq46712);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__46713,seq46712__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__45363__auto__ = [];
var len__45356__auto___46727 = arguments.length;
var i__45357__auto___46728 = (0);
while(true){
if((i__45357__auto___46728 < len__45356__auto___46727)){
args__45363__auto__.push((arguments[i__45357__auto___46728]));

var G__46729 = (i__45357__auto___46728 + (1));
i__45357__auto___46728 = G__46729;
continue;
} else {
}
break;
}

var argseq__45364__auto__ = ((((1) < args__45363__auto__.length))?(new cljs.core.IndexedSeq(args__45363__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45364__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__46723){
var vec__46724 = p__46723;
var req = cljs.core.nth.call(null,vec__46724,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq46721){
var G__46722 = cljs.core.first.call(null,seq46721);
var seq46721__$1 = cljs.core.next.call(null,seq46721);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__46722,seq46721__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__45363__auto__ = [];
var len__45356__auto___46736 = arguments.length;
var i__45357__auto___46737 = (0);
while(true){
if((i__45357__auto___46737 < len__45356__auto___46736)){
args__45363__auto__.push((arguments[i__45357__auto___46737]));

var G__46738 = (i__45357__auto___46737 + (1));
i__45357__auto___46737 = G__46738;
continue;
} else {
}
break;
}

var argseq__45364__auto__ = ((((1) < args__45363__auto__.length))?(new cljs.core.IndexedSeq(args__45363__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45364__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__46732){
var vec__46733 = p__46732;
var req = cljs.core.nth.call(null,vec__46733,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq46730){
var G__46731 = cljs.core.first.call(null,seq46730);
var seq46730__$1 = cljs.core.next.call(null,seq46730);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__46731,seq46730__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__45363__auto__ = [];
var len__45356__auto___46745 = arguments.length;
var i__45357__auto___46746 = (0);
while(true){
if((i__45357__auto___46746 < len__45356__auto___46745)){
args__45363__auto__.push((arguments[i__45357__auto___46746]));

var G__46747 = (i__45357__auto___46746 + (1));
i__45357__auto___46746 = G__46747;
continue;
} else {
}
break;
}

var argseq__45364__auto__ = ((((1) < args__45363__auto__.length))?(new cljs.core.IndexedSeq(args__45363__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45364__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__46741){
var vec__46742 = p__46741;
var req = cljs.core.nth.call(null,vec__46742,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq46739){
var G__46740 = cljs.core.first.call(null,seq46739);
var seq46739__$1 = cljs.core.next.call(null,seq46739);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__46740,seq46739__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__45363__auto__ = [];
var len__45356__auto___46754 = arguments.length;
var i__45357__auto___46755 = (0);
while(true){
if((i__45357__auto___46755 < len__45356__auto___46754)){
args__45363__auto__.push((arguments[i__45357__auto___46755]));

var G__46756 = (i__45357__auto___46755 + (1));
i__45357__auto___46755 = G__46756;
continue;
} else {
}
break;
}

var argseq__45364__auto__ = ((((1) < args__45363__auto__.length))?(new cljs.core.IndexedSeq(args__45363__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45364__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__46750){
var vec__46751 = p__46750;
var req = cljs.core.nth.call(null,vec__46751,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq46748){
var G__46749 = cljs.core.first.call(null,seq46748);
var seq46748__$1 = cljs.core.next.call(null,seq46748);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__46749,seq46748__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__45363__auto__ = [];
var len__45356__auto___46763 = arguments.length;
var i__45357__auto___46764 = (0);
while(true){
if((i__45357__auto___46764 < len__45356__auto___46763)){
args__45363__auto__.push((arguments[i__45357__auto___46764]));

var G__46765 = (i__45357__auto___46764 + (1));
i__45357__auto___46764 = G__46765;
continue;
} else {
}
break;
}

var argseq__45364__auto__ = ((((1) < args__45363__auto__.length))?(new cljs.core.IndexedSeq(args__45363__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45364__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__46759){
var vec__46760 = p__46759;
var req = cljs.core.nth.call(null,vec__46760,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq46757){
var G__46758 = cljs.core.first.call(null,seq46757);
var seq46757__$1 = cljs.core.next.call(null,seq46757);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__46758,seq46757__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__45363__auto__ = [];
var len__45356__auto___46772 = arguments.length;
var i__45357__auto___46773 = (0);
while(true){
if((i__45357__auto___46773 < len__45356__auto___46772)){
args__45363__auto__.push((arguments[i__45357__auto___46773]));

var G__46774 = (i__45357__auto___46773 + (1));
i__45357__auto___46773 = G__46774;
continue;
} else {
}
break;
}

var argseq__45364__auto__ = ((((1) < args__45363__auto__.length))?(new cljs.core.IndexedSeq(args__45363__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45364__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__46768){
var vec__46769 = p__46768;
var req = cljs.core.nth.call(null,vec__46769,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq46766){
var G__46767 = cljs.core.first.call(null,seq46766);
var seq46766__$1 = cljs.core.next.call(null,seq46766);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__46767,seq46766__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__45363__auto__ = [];
var len__45356__auto___46781 = arguments.length;
var i__45357__auto___46782 = (0);
while(true){
if((i__45357__auto___46782 < len__45356__auto___46781)){
args__45363__auto__.push((arguments[i__45357__auto___46782]));

var G__46783 = (i__45357__auto___46782 + (1));
i__45357__auto___46782 = G__46783;
continue;
} else {
}
break;
}

var argseq__45364__auto__ = ((((1) < args__45363__auto__.length))?(new cljs.core.IndexedSeq(args__45363__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45364__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__46777){
var vec__46778 = p__46777;
var req = cljs.core.nth.call(null,vec__46778,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq46775){
var G__46776 = cljs.core.first.call(null,seq46775);
var seq46775__$1 = cljs.core.next.call(null,seq46775);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__46776,seq46775__$1);
});


//# sourceMappingURL=client.js.map?rel=1466158937249