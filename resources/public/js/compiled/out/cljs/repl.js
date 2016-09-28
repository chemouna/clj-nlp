// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__48199){
var map__48224 = p__48199;
var map__48224__$1 = ((((!((map__48224 == null)))?((((map__48224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48224):map__48224);
var m = map__48224__$1;
var n = cljs.core.get.call(null,map__48224__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__48224__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__48226_48248 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48227_48249 = null;
var count__48228_48250 = (0);
var i__48229_48251 = (0);
while(true){
if((i__48229_48251 < count__48228_48250)){
var f_48252 = cljs.core._nth.call(null,chunk__48227_48249,i__48229_48251);
cljs.core.println.call(null,"  ",f_48252);

var G__48253 = seq__48226_48248;
var G__48254 = chunk__48227_48249;
var G__48255 = count__48228_48250;
var G__48256 = (i__48229_48251 + (1));
seq__48226_48248 = G__48253;
chunk__48227_48249 = G__48254;
count__48228_48250 = G__48255;
i__48229_48251 = G__48256;
continue;
} else {
var temp__4657__auto___48257 = cljs.core.seq.call(null,seq__48226_48248);
if(temp__4657__auto___48257){
var seq__48226_48258__$1 = temp__4657__auto___48257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48226_48258__$1)){
var c__39206__auto___48259 = cljs.core.chunk_first.call(null,seq__48226_48258__$1);
var G__48260 = cljs.core.chunk_rest.call(null,seq__48226_48258__$1);
var G__48261 = c__39206__auto___48259;
var G__48262 = cljs.core.count.call(null,c__39206__auto___48259);
var G__48263 = (0);
seq__48226_48248 = G__48260;
chunk__48227_48249 = G__48261;
count__48228_48250 = G__48262;
i__48229_48251 = G__48263;
continue;
} else {
var f_48264 = cljs.core.first.call(null,seq__48226_48258__$1);
cljs.core.println.call(null,"  ",f_48264);

var G__48265 = cljs.core.next.call(null,seq__48226_48258__$1);
var G__48266 = null;
var G__48267 = (0);
var G__48268 = (0);
seq__48226_48248 = G__48265;
chunk__48227_48249 = G__48266;
count__48228_48250 = G__48267;
i__48229_48251 = G__48268;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_48269 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__38395__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__38395__auto__)){
return or__38395__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_48269);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_48269)))?cljs.core.second.call(null,arglists_48269):arglists_48269));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__48230_48270 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48231_48271 = null;
var count__48232_48272 = (0);
var i__48233_48273 = (0);
while(true){
if((i__48233_48273 < count__48232_48272)){
var vec__48234_48274 = cljs.core._nth.call(null,chunk__48231_48271,i__48233_48273);
var name_48275 = cljs.core.nth.call(null,vec__48234_48274,(0),null);
var map__48237_48276 = cljs.core.nth.call(null,vec__48234_48274,(1),null);
var map__48237_48277__$1 = ((((!((map__48237_48276 == null)))?((((map__48237_48276.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48237_48276.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48237_48276):map__48237_48276);
var doc_48278 = cljs.core.get.call(null,map__48237_48277__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48279 = cljs.core.get.call(null,map__48237_48277__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_48275);

cljs.core.println.call(null," ",arglists_48279);

if(cljs.core.truth_(doc_48278)){
cljs.core.println.call(null," ",doc_48278);
} else {
}

var G__48280 = seq__48230_48270;
var G__48281 = chunk__48231_48271;
var G__48282 = count__48232_48272;
var G__48283 = (i__48233_48273 + (1));
seq__48230_48270 = G__48280;
chunk__48231_48271 = G__48281;
count__48232_48272 = G__48282;
i__48233_48273 = G__48283;
continue;
} else {
var temp__4657__auto___48284 = cljs.core.seq.call(null,seq__48230_48270);
if(temp__4657__auto___48284){
var seq__48230_48285__$1 = temp__4657__auto___48284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48230_48285__$1)){
var c__39206__auto___48286 = cljs.core.chunk_first.call(null,seq__48230_48285__$1);
var G__48287 = cljs.core.chunk_rest.call(null,seq__48230_48285__$1);
var G__48288 = c__39206__auto___48286;
var G__48289 = cljs.core.count.call(null,c__39206__auto___48286);
var G__48290 = (0);
seq__48230_48270 = G__48287;
chunk__48231_48271 = G__48288;
count__48232_48272 = G__48289;
i__48233_48273 = G__48290;
continue;
} else {
var vec__48239_48291 = cljs.core.first.call(null,seq__48230_48285__$1);
var name_48292 = cljs.core.nth.call(null,vec__48239_48291,(0),null);
var map__48242_48293 = cljs.core.nth.call(null,vec__48239_48291,(1),null);
var map__48242_48294__$1 = ((((!((map__48242_48293 == null)))?((((map__48242_48293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48242_48293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48242_48293):map__48242_48293);
var doc_48295 = cljs.core.get.call(null,map__48242_48294__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48296 = cljs.core.get.call(null,map__48242_48294__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_48292);

cljs.core.println.call(null," ",arglists_48296);

if(cljs.core.truth_(doc_48295)){
cljs.core.println.call(null," ",doc_48295);
} else {
}

var G__48297 = cljs.core.next.call(null,seq__48230_48285__$1);
var G__48298 = null;
var G__48299 = (0);
var G__48300 = (0);
seq__48230_48270 = G__48297;
chunk__48231_48271 = G__48298;
count__48232_48272 = G__48299;
i__48233_48273 = G__48300;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var specs = cljs.spec.fn_specs.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,cljs.core.vals.call(null,specs)))){
cljs.core.print.call(null,"Spec");

return cljs.core.run_BANG_.call(null,((function (specs,map__48224,map__48224__$1,m,n,nm){
return (function (p__48244){
var vec__48245 = p__48244;
var role = cljs.core.nth.call(null,vec__48245,(0),null);
var spec = cljs.core.nth.call(null,vec__48245,(1),null);
if(cljs.core.truth_((function (){var and__38383__auto__ = spec;
if(cljs.core.truth_(and__38383__auto__)){
return !(cljs.core._EQ_.call(null,spec,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
} else {
return and__38383__auto__;
}
})())){
return cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec));
} else {
return null;
}
});})(specs,map__48224,map__48224__$1,m,n,nm))
,specs);
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1466122643080