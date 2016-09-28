// Compiled by ClojureScript 1.9.36 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__38395__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__38395__auto__){
return or__38395__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__38395__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__38395__auto__)){
return or__38395__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__45934_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__45934_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__45939 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__45940 = null;
var count__45941 = (0);
var i__45942 = (0);
while(true){
if((i__45942 < count__45941)){
var n = cljs.core._nth.call(null,chunk__45940,i__45942);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__45943 = seq__45939;
var G__45944 = chunk__45940;
var G__45945 = count__45941;
var G__45946 = (i__45942 + (1));
seq__45939 = G__45943;
chunk__45940 = G__45944;
count__45941 = G__45945;
i__45942 = G__45946;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45939);
if(temp__4657__auto__){
var seq__45939__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45939__$1)){
var c__39206__auto__ = cljs.core.chunk_first.call(null,seq__45939__$1);
var G__45947 = cljs.core.chunk_rest.call(null,seq__45939__$1);
var G__45948 = c__39206__auto__;
var G__45949 = cljs.core.count.call(null,c__39206__auto__);
var G__45950 = (0);
seq__45939 = G__45947;
chunk__45940 = G__45948;
count__45941 = G__45949;
i__45942 = G__45950;
continue;
} else {
var n = cljs.core.first.call(null,seq__45939__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__45951 = cljs.core.next.call(null,seq__45939__$1);
var G__45952 = null;
var G__45953 = (0);
var G__45954 = (0);
seq__45939 = G__45951;
chunk__45940 = G__45952;
count__45941 = G__45953;
i__45942 = G__45954;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__46005_46016 = cljs.core.seq.call(null,deps);
var chunk__46006_46017 = null;
var count__46007_46018 = (0);
var i__46008_46019 = (0);
while(true){
if((i__46008_46019 < count__46007_46018)){
var dep_46020 = cljs.core._nth.call(null,chunk__46006_46017,i__46008_46019);
topo_sort_helper_STAR_.call(null,dep_46020,(depth + (1)),state);

var G__46021 = seq__46005_46016;
var G__46022 = chunk__46006_46017;
var G__46023 = count__46007_46018;
var G__46024 = (i__46008_46019 + (1));
seq__46005_46016 = G__46021;
chunk__46006_46017 = G__46022;
count__46007_46018 = G__46023;
i__46008_46019 = G__46024;
continue;
} else {
var temp__4657__auto___46025 = cljs.core.seq.call(null,seq__46005_46016);
if(temp__4657__auto___46025){
var seq__46005_46026__$1 = temp__4657__auto___46025;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46005_46026__$1)){
var c__39206__auto___46027 = cljs.core.chunk_first.call(null,seq__46005_46026__$1);
var G__46028 = cljs.core.chunk_rest.call(null,seq__46005_46026__$1);
var G__46029 = c__39206__auto___46027;
var G__46030 = cljs.core.count.call(null,c__39206__auto___46027);
var G__46031 = (0);
seq__46005_46016 = G__46028;
chunk__46006_46017 = G__46029;
count__46007_46018 = G__46030;
i__46008_46019 = G__46031;
continue;
} else {
var dep_46032 = cljs.core.first.call(null,seq__46005_46026__$1);
topo_sort_helper_STAR_.call(null,dep_46032,(depth + (1)),state);

var G__46033 = cljs.core.next.call(null,seq__46005_46026__$1);
var G__46034 = null;
var G__46035 = (0);
var G__46036 = (0);
seq__46005_46016 = G__46033;
chunk__46006_46017 = G__46034;
count__46007_46018 = G__46035;
i__46008_46019 = G__46036;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__46009){
var vec__46013 = p__46009;
var seq__46014 = cljs.core.seq.call(null,vec__46013);
var first__46015 = cljs.core.first.call(null,seq__46014);
var seq__46014__$1 = cljs.core.next.call(null,seq__46014);
var x = first__46015;
var xs = seq__46014__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__46013,seq__46014,first__46015,seq__46014__$1,x,xs,get_deps__$1){
return (function (p1__45955_SHARP_){
return clojure.set.difference.call(null,p1__45955_SHARP_,x);
});})(vec__46013,seq__46014,first__46015,seq__46014__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__46049 = cljs.core.seq.call(null,provides);
var chunk__46050 = null;
var count__46051 = (0);
var i__46052 = (0);
while(true){
if((i__46052 < count__46051)){
var prov = cljs.core._nth.call(null,chunk__46050,i__46052);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__46053_46061 = cljs.core.seq.call(null,requires);
var chunk__46054_46062 = null;
var count__46055_46063 = (0);
var i__46056_46064 = (0);
while(true){
if((i__46056_46064 < count__46055_46063)){
var req_46065 = cljs.core._nth.call(null,chunk__46054_46062,i__46056_46064);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46065,prov);

var G__46066 = seq__46053_46061;
var G__46067 = chunk__46054_46062;
var G__46068 = count__46055_46063;
var G__46069 = (i__46056_46064 + (1));
seq__46053_46061 = G__46066;
chunk__46054_46062 = G__46067;
count__46055_46063 = G__46068;
i__46056_46064 = G__46069;
continue;
} else {
var temp__4657__auto___46070 = cljs.core.seq.call(null,seq__46053_46061);
if(temp__4657__auto___46070){
var seq__46053_46071__$1 = temp__4657__auto___46070;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46053_46071__$1)){
var c__39206__auto___46072 = cljs.core.chunk_first.call(null,seq__46053_46071__$1);
var G__46073 = cljs.core.chunk_rest.call(null,seq__46053_46071__$1);
var G__46074 = c__39206__auto___46072;
var G__46075 = cljs.core.count.call(null,c__39206__auto___46072);
var G__46076 = (0);
seq__46053_46061 = G__46073;
chunk__46054_46062 = G__46074;
count__46055_46063 = G__46075;
i__46056_46064 = G__46076;
continue;
} else {
var req_46077 = cljs.core.first.call(null,seq__46053_46071__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46077,prov);

var G__46078 = cljs.core.next.call(null,seq__46053_46071__$1);
var G__46079 = null;
var G__46080 = (0);
var G__46081 = (0);
seq__46053_46061 = G__46078;
chunk__46054_46062 = G__46079;
count__46055_46063 = G__46080;
i__46056_46064 = G__46081;
continue;
}
} else {
}
}
break;
}

var G__46082 = seq__46049;
var G__46083 = chunk__46050;
var G__46084 = count__46051;
var G__46085 = (i__46052 + (1));
seq__46049 = G__46082;
chunk__46050 = G__46083;
count__46051 = G__46084;
i__46052 = G__46085;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46049);
if(temp__4657__auto__){
var seq__46049__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46049__$1)){
var c__39206__auto__ = cljs.core.chunk_first.call(null,seq__46049__$1);
var G__46086 = cljs.core.chunk_rest.call(null,seq__46049__$1);
var G__46087 = c__39206__auto__;
var G__46088 = cljs.core.count.call(null,c__39206__auto__);
var G__46089 = (0);
seq__46049 = G__46086;
chunk__46050 = G__46087;
count__46051 = G__46088;
i__46052 = G__46089;
continue;
} else {
var prov = cljs.core.first.call(null,seq__46049__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__46057_46090 = cljs.core.seq.call(null,requires);
var chunk__46058_46091 = null;
var count__46059_46092 = (0);
var i__46060_46093 = (0);
while(true){
if((i__46060_46093 < count__46059_46092)){
var req_46094 = cljs.core._nth.call(null,chunk__46058_46091,i__46060_46093);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46094,prov);

var G__46095 = seq__46057_46090;
var G__46096 = chunk__46058_46091;
var G__46097 = count__46059_46092;
var G__46098 = (i__46060_46093 + (1));
seq__46057_46090 = G__46095;
chunk__46058_46091 = G__46096;
count__46059_46092 = G__46097;
i__46060_46093 = G__46098;
continue;
} else {
var temp__4657__auto___46099__$1 = cljs.core.seq.call(null,seq__46057_46090);
if(temp__4657__auto___46099__$1){
var seq__46057_46100__$1 = temp__4657__auto___46099__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46057_46100__$1)){
var c__39206__auto___46101 = cljs.core.chunk_first.call(null,seq__46057_46100__$1);
var G__46102 = cljs.core.chunk_rest.call(null,seq__46057_46100__$1);
var G__46103 = c__39206__auto___46101;
var G__46104 = cljs.core.count.call(null,c__39206__auto___46101);
var G__46105 = (0);
seq__46057_46090 = G__46102;
chunk__46058_46091 = G__46103;
count__46059_46092 = G__46104;
i__46060_46093 = G__46105;
continue;
} else {
var req_46106 = cljs.core.first.call(null,seq__46057_46100__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46106,prov);

var G__46107 = cljs.core.next.call(null,seq__46057_46100__$1);
var G__46108 = null;
var G__46109 = (0);
var G__46110 = (0);
seq__46057_46090 = G__46107;
chunk__46058_46091 = G__46108;
count__46059_46092 = G__46109;
i__46060_46093 = G__46110;
continue;
}
} else {
}
}
break;
}

var G__46111 = cljs.core.next.call(null,seq__46049__$1);
var G__46112 = null;
var G__46113 = (0);
var G__46114 = (0);
seq__46049 = G__46111;
chunk__46050 = G__46112;
count__46051 = G__46113;
i__46052 = G__46114;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__46119_46123 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__46120_46124 = null;
var count__46121_46125 = (0);
var i__46122_46126 = (0);
while(true){
if((i__46122_46126 < count__46121_46125)){
var ns_46127 = cljs.core._nth.call(null,chunk__46120_46124,i__46122_46126);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_46127);

var G__46128 = seq__46119_46123;
var G__46129 = chunk__46120_46124;
var G__46130 = count__46121_46125;
var G__46131 = (i__46122_46126 + (1));
seq__46119_46123 = G__46128;
chunk__46120_46124 = G__46129;
count__46121_46125 = G__46130;
i__46122_46126 = G__46131;
continue;
} else {
var temp__4657__auto___46132 = cljs.core.seq.call(null,seq__46119_46123);
if(temp__4657__auto___46132){
var seq__46119_46133__$1 = temp__4657__auto___46132;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46119_46133__$1)){
var c__39206__auto___46134 = cljs.core.chunk_first.call(null,seq__46119_46133__$1);
var G__46135 = cljs.core.chunk_rest.call(null,seq__46119_46133__$1);
var G__46136 = c__39206__auto___46134;
var G__46137 = cljs.core.count.call(null,c__39206__auto___46134);
var G__46138 = (0);
seq__46119_46123 = G__46135;
chunk__46120_46124 = G__46136;
count__46121_46125 = G__46137;
i__46122_46126 = G__46138;
continue;
} else {
var ns_46139 = cljs.core.first.call(null,seq__46119_46133__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_46139);

var G__46140 = cljs.core.next.call(null,seq__46119_46133__$1);
var G__46141 = null;
var G__46142 = (0);
var G__46143 = (0);
seq__46119_46123 = G__46140;
chunk__46120_46124 = G__46141;
count__46121_46125 = G__46142;
i__46122_46126 = G__46143;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__38395__auto__ = goog.require__;
if(cljs.core.truth_(or__38395__auto__)){
return or__38395__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__46144__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__46144 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46145__i = 0, G__46145__a = new Array(arguments.length -  0);
while (G__46145__i < G__46145__a.length) {G__46145__a[G__46145__i] = arguments[G__46145__i + 0]; ++G__46145__i;}
  args = new cljs.core.IndexedSeq(G__46145__a,0);
} 
return G__46144__delegate.call(this,args);};
G__46144.cljs$lang$maxFixedArity = 0;
G__46144.cljs$lang$applyTo = (function (arglist__46146){
var args = cljs.core.seq(arglist__46146);
return G__46144__delegate(args);
});
G__46144.cljs$core$IFn$_invoke$arity$variadic = G__46144__delegate;
return G__46144;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__46148 = cljs.core._EQ_;
var expr__46149 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__46148.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__46149))){
var path_parts = ((function (pred__46148,expr__46149){
return (function (p1__46147_SHARP_){
return clojure.string.split.call(null,p1__46147_SHARP_,/[\/\\]/);
});})(pred__46148,expr__46149))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__46148,expr__46149){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e46151){if((e46151 instanceof Error)){
var e = e46151;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e46151;

}
}})());
});
;})(path_parts,sep,root,pred__46148,expr__46149))
} else {
if(cljs.core.truth_(pred__46148.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__46149))){
return ((function (pred__46148,expr__46149){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__46148,expr__46149){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__46148,expr__46149))
);

return deferred.addErrback(((function (deferred,pred__46148,expr__46149){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__46148,expr__46149))
);
});
;})(pred__46148,expr__46149))
} else {
return ((function (pred__46148,expr__46149){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__46148,expr__46149))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__46152,callback){
var map__46155 = p__46152;
var map__46155__$1 = ((((!((map__46155 == null)))?((((map__46155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46155):map__46155);
var file_msg = map__46155__$1;
var request_url = cljs.core.get.call(null,map__46155__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__46155,map__46155__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__46155,map__46155__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__43031__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43031__auto__){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (c__43031__auto__){
return (function (state_46179){
var state_val_46180 = (state_46179[(1)]);
if((state_val_46180 === (7))){
var inst_46175 = (state_46179[(2)]);
var state_46179__$1 = state_46179;
var statearr_46181_46201 = state_46179__$1;
(statearr_46181_46201[(2)] = inst_46175);

(statearr_46181_46201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46180 === (1))){
var state_46179__$1 = state_46179;
var statearr_46182_46202 = state_46179__$1;
(statearr_46182_46202[(2)] = null);

(statearr_46182_46202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46180 === (4))){
var inst_46159 = (state_46179[(7)]);
var inst_46159__$1 = (state_46179[(2)]);
var state_46179__$1 = (function (){var statearr_46183 = state_46179;
(statearr_46183[(7)] = inst_46159__$1);

return statearr_46183;
})();
if(cljs.core.truth_(inst_46159__$1)){
var statearr_46184_46203 = state_46179__$1;
(statearr_46184_46203[(1)] = (5));

} else {
var statearr_46185_46204 = state_46179__$1;
(statearr_46185_46204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46180 === (6))){
var state_46179__$1 = state_46179;
var statearr_46186_46205 = state_46179__$1;
(statearr_46186_46205[(2)] = null);

(statearr_46186_46205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46180 === (3))){
var inst_46177 = (state_46179[(2)]);
var state_46179__$1 = state_46179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46179__$1,inst_46177);
} else {
if((state_val_46180 === (2))){
var state_46179__$1 = state_46179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46179__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_46180 === (11))){
var inst_46171 = (state_46179[(2)]);
var state_46179__$1 = (function (){var statearr_46187 = state_46179;
(statearr_46187[(8)] = inst_46171);

return statearr_46187;
})();
var statearr_46188_46206 = state_46179__$1;
(statearr_46188_46206[(2)] = null);

(statearr_46188_46206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46180 === (9))){
var inst_46163 = (state_46179[(9)]);
var inst_46165 = (state_46179[(10)]);
var inst_46167 = inst_46165.call(null,inst_46163);
var state_46179__$1 = state_46179;
var statearr_46189_46207 = state_46179__$1;
(statearr_46189_46207[(2)] = inst_46167);

(statearr_46189_46207[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46180 === (5))){
var inst_46159 = (state_46179[(7)]);
var inst_46161 = figwheel.client.file_reloading.blocking_load.call(null,inst_46159);
var state_46179__$1 = state_46179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46179__$1,(8),inst_46161);
} else {
if((state_val_46180 === (10))){
var inst_46163 = (state_46179[(9)]);
var inst_46169 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_46163);
var state_46179__$1 = state_46179;
var statearr_46190_46208 = state_46179__$1;
(statearr_46190_46208[(2)] = inst_46169);

(statearr_46190_46208[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46180 === (8))){
var inst_46165 = (state_46179[(10)]);
var inst_46159 = (state_46179[(7)]);
var inst_46163 = (state_46179[(2)]);
var inst_46164 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_46165__$1 = cljs.core.get.call(null,inst_46164,inst_46159);
var state_46179__$1 = (function (){var statearr_46191 = state_46179;
(statearr_46191[(9)] = inst_46163);

(statearr_46191[(10)] = inst_46165__$1);

return statearr_46191;
})();
if(cljs.core.truth_(inst_46165__$1)){
var statearr_46192_46209 = state_46179__$1;
(statearr_46192_46209[(1)] = (9));

} else {
var statearr_46193_46210 = state_46179__$1;
(statearr_46193_46210[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__43031__auto__))
;
return ((function (switch__42919__auto__,c__43031__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__42920__auto__ = null;
var figwheel$client$file_reloading$state_machine__42920__auto____0 = (function (){
var statearr_46197 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46197[(0)] = figwheel$client$file_reloading$state_machine__42920__auto__);

(statearr_46197[(1)] = (1));

return statearr_46197;
});
var figwheel$client$file_reloading$state_machine__42920__auto____1 = (function (state_46179){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_46179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e46198){if((e46198 instanceof Object)){
var ex__42923__auto__ = e46198;
var statearr_46199_46211 = state_46179;
(statearr_46199_46211[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46212 = state_46179;
state_46179 = G__46212;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__42920__auto__ = function(state_46179){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__42920__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__42920__auto____1.call(this,state_46179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__42920__auto____0;
figwheel$client$file_reloading$state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__42920__auto____1;
return figwheel$client$file_reloading$state_machine__42920__auto__;
})()
;})(switch__42919__auto__,c__43031__auto__))
})();
var state__43033__auto__ = (function (){var statearr_46200 = f__43032__auto__.call(null);
(statearr_46200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto__);

return statearr_46200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(c__43031__auto__))
);

return c__43031__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__46213,callback){
var map__46216 = p__46213;
var map__46216__$1 = ((((!((map__46216 == null)))?((((map__46216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46216):map__46216);
var file_msg = map__46216__$1;
var namespace = cljs.core.get.call(null,map__46216__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__46216,map__46216__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__46216,map__46216__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__46218){
var map__46221 = p__46218;
var map__46221__$1 = ((((!((map__46221 == null)))?((((map__46221.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46221.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46221):map__46221);
var file_msg = map__46221__$1;
var namespace = cljs.core.get.call(null,map__46221__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__38383__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__38383__auto__){
var or__38395__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__38395__auto__)){
return or__38395__auto__;
} else {
var or__38395__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__38395__auto____$1)){
return or__38395__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__38383__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__46223,callback){
var map__46226 = p__46223;
var map__46226__$1 = ((((!((map__46226 == null)))?((((map__46226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46226):map__46226);
var file_msg = map__46226__$1;
var request_url = cljs.core.get.call(null,map__46226__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__46226__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__43031__auto___46330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43031__auto___46330,out){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (c__43031__auto___46330,out){
return (function (state_46312){
var state_val_46313 = (state_46312[(1)]);
if((state_val_46313 === (1))){
var inst_46286 = cljs.core.seq.call(null,files);
var inst_46287 = cljs.core.first.call(null,inst_46286);
var inst_46288 = cljs.core.next.call(null,inst_46286);
var inst_46289 = files;
var state_46312__$1 = (function (){var statearr_46314 = state_46312;
(statearr_46314[(7)] = inst_46288);

(statearr_46314[(8)] = inst_46289);

(statearr_46314[(9)] = inst_46287);

return statearr_46314;
})();
var statearr_46315_46331 = state_46312__$1;
(statearr_46315_46331[(2)] = null);

(statearr_46315_46331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46313 === (2))){
var inst_46295 = (state_46312[(10)]);
var inst_46289 = (state_46312[(8)]);
var inst_46294 = cljs.core.seq.call(null,inst_46289);
var inst_46295__$1 = cljs.core.first.call(null,inst_46294);
var inst_46296 = cljs.core.next.call(null,inst_46294);
var inst_46297 = (inst_46295__$1 == null);
var inst_46298 = cljs.core.not.call(null,inst_46297);
var state_46312__$1 = (function (){var statearr_46316 = state_46312;
(statearr_46316[(10)] = inst_46295__$1);

(statearr_46316[(11)] = inst_46296);

return statearr_46316;
})();
if(inst_46298){
var statearr_46317_46332 = state_46312__$1;
(statearr_46317_46332[(1)] = (4));

} else {
var statearr_46318_46333 = state_46312__$1;
(statearr_46318_46333[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46313 === (3))){
var inst_46310 = (state_46312[(2)]);
var state_46312__$1 = state_46312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46312__$1,inst_46310);
} else {
if((state_val_46313 === (4))){
var inst_46295 = (state_46312[(10)]);
var inst_46300 = figwheel.client.file_reloading.reload_js_file.call(null,inst_46295);
var state_46312__$1 = state_46312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46312__$1,(7),inst_46300);
} else {
if((state_val_46313 === (5))){
var inst_46306 = cljs.core.async.close_BANG_.call(null,out);
var state_46312__$1 = state_46312;
var statearr_46319_46334 = state_46312__$1;
(statearr_46319_46334[(2)] = inst_46306);

(statearr_46319_46334[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46313 === (6))){
var inst_46308 = (state_46312[(2)]);
var state_46312__$1 = state_46312;
var statearr_46320_46335 = state_46312__$1;
(statearr_46320_46335[(2)] = inst_46308);

(statearr_46320_46335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46313 === (7))){
var inst_46296 = (state_46312[(11)]);
var inst_46302 = (state_46312[(2)]);
var inst_46303 = cljs.core.async.put_BANG_.call(null,out,inst_46302);
var inst_46289 = inst_46296;
var state_46312__$1 = (function (){var statearr_46321 = state_46312;
(statearr_46321[(12)] = inst_46303);

(statearr_46321[(8)] = inst_46289);

return statearr_46321;
})();
var statearr_46322_46336 = state_46312__$1;
(statearr_46322_46336[(2)] = null);

(statearr_46322_46336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__43031__auto___46330,out))
;
return ((function (switch__42919__auto__,c__43031__auto___46330,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__42920__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__42920__auto____0 = (function (){
var statearr_46326 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46326[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__42920__auto__);

(statearr_46326[(1)] = (1));

return statearr_46326;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__42920__auto____1 = (function (state_46312){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_46312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e46327){if((e46327 instanceof Object)){
var ex__42923__auto__ = e46327;
var statearr_46328_46337 = state_46312;
(statearr_46328_46337[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46338 = state_46312;
state_46312 = G__46338;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__42920__auto__ = function(state_46312){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__42920__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__42920__auto____1.call(this,state_46312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__42920__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__42920__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__42920__auto__;
})()
;})(switch__42919__auto__,c__43031__auto___46330,out))
})();
var state__43033__auto__ = (function (){var statearr_46329 = f__43032__auto__.call(null);
(statearr_46329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto___46330);

return statearr_46329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(c__43031__auto___46330,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__46339,opts){
var map__46343 = p__46339;
var map__46343__$1 = ((((!((map__46343 == null)))?((((map__46343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46343):map__46343);
var eval_body__$1 = cljs.core.get.call(null,map__46343__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__46343__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__38383__auto__ = eval_body__$1;
if(cljs.core.truth_(and__38383__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__38383__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e46345){var e = e46345;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__46346_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__46346_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__46355){
var vec__46356 = p__46355;
var k = cljs.core.nth.call(null,vec__46356,(0),null);
var v = cljs.core.nth.call(null,vec__46356,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__46359){
var vec__46360 = p__46359;
var k = cljs.core.nth.call(null,vec__46360,(0),null);
var v = cljs.core.nth.call(null,vec__46360,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__46366,p__46367){
var map__46614 = p__46366;
var map__46614__$1 = ((((!((map__46614 == null)))?((((map__46614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46614):map__46614);
var opts = map__46614__$1;
var before_jsload = cljs.core.get.call(null,map__46614__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__46614__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__46614__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__46615 = p__46367;
var map__46615__$1 = ((((!((map__46615 == null)))?((((map__46615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46615):map__46615);
var msg = map__46615__$1;
var files = cljs.core.get.call(null,map__46615__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__46615__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__46615__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__43031__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43031__auto__,map__46614,map__46614__$1,opts,before_jsload,on_jsload,reload_dependents,map__46615,map__46615__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (c__43031__auto__,map__46614,map__46614__$1,opts,before_jsload,on_jsload,reload_dependents,map__46615,map__46615__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_46768){
var state_val_46769 = (state_46768[(1)]);
if((state_val_46769 === (7))){
var inst_46629 = (state_46768[(7)]);
var inst_46631 = (state_46768[(8)]);
var inst_46630 = (state_46768[(9)]);
var inst_46632 = (state_46768[(10)]);
var inst_46637 = cljs.core._nth.call(null,inst_46630,inst_46632);
var inst_46638 = figwheel.client.file_reloading.eval_body.call(null,inst_46637,opts);
var inst_46639 = (inst_46632 + (1));
var tmp46770 = inst_46629;
var tmp46771 = inst_46631;
var tmp46772 = inst_46630;
var inst_46629__$1 = tmp46770;
var inst_46630__$1 = tmp46772;
var inst_46631__$1 = tmp46771;
var inst_46632__$1 = inst_46639;
var state_46768__$1 = (function (){var statearr_46773 = state_46768;
(statearr_46773[(7)] = inst_46629__$1);

(statearr_46773[(8)] = inst_46631__$1);

(statearr_46773[(9)] = inst_46630__$1);

(statearr_46773[(11)] = inst_46638);

(statearr_46773[(10)] = inst_46632__$1);

return statearr_46773;
})();
var statearr_46774_46860 = state_46768__$1;
(statearr_46774_46860[(2)] = null);

(statearr_46774_46860[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (20))){
var inst_46672 = (state_46768[(12)]);
var inst_46680 = figwheel.client.file_reloading.sort_files.call(null,inst_46672);
var state_46768__$1 = state_46768;
var statearr_46775_46861 = state_46768__$1;
(statearr_46775_46861[(2)] = inst_46680);

(statearr_46775_46861[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (27))){
var state_46768__$1 = state_46768;
var statearr_46776_46862 = state_46768__$1;
(statearr_46776_46862[(2)] = null);

(statearr_46776_46862[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (1))){
var inst_46621 = (state_46768[(13)]);
var inst_46618 = before_jsload.call(null,files);
var inst_46619 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_46620 = (function (){return ((function (inst_46621,inst_46618,inst_46619,state_val_46769,c__43031__auto__,map__46614,map__46614__$1,opts,before_jsload,on_jsload,reload_dependents,map__46615,map__46615__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46363_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__46363_SHARP_);
});
;})(inst_46621,inst_46618,inst_46619,state_val_46769,c__43031__auto__,map__46614,map__46614__$1,opts,before_jsload,on_jsload,reload_dependents,map__46615,map__46615__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46621__$1 = cljs.core.filter.call(null,inst_46620,files);
var inst_46622 = cljs.core.not_empty.call(null,inst_46621__$1);
var state_46768__$1 = (function (){var statearr_46777 = state_46768;
(statearr_46777[(14)] = inst_46618);

(statearr_46777[(13)] = inst_46621__$1);

(statearr_46777[(15)] = inst_46619);

return statearr_46777;
})();
if(cljs.core.truth_(inst_46622)){
var statearr_46778_46863 = state_46768__$1;
(statearr_46778_46863[(1)] = (2));

} else {
var statearr_46779_46864 = state_46768__$1;
(statearr_46779_46864[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (24))){
var state_46768__$1 = state_46768;
var statearr_46780_46865 = state_46768__$1;
(statearr_46780_46865[(2)] = null);

(statearr_46780_46865[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (39))){
var inst_46722 = (state_46768[(16)]);
var state_46768__$1 = state_46768;
var statearr_46781_46866 = state_46768__$1;
(statearr_46781_46866[(2)] = inst_46722);

(statearr_46781_46866[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (46))){
var inst_46763 = (state_46768[(2)]);
var state_46768__$1 = state_46768;
var statearr_46782_46867 = state_46768__$1;
(statearr_46782_46867[(2)] = inst_46763);

(statearr_46782_46867[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (4))){
var inst_46666 = (state_46768[(2)]);
var inst_46667 = cljs.core.List.EMPTY;
var inst_46668 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_46667);
var inst_46669 = (function (){return ((function (inst_46666,inst_46667,inst_46668,state_val_46769,c__43031__auto__,map__46614,map__46614__$1,opts,before_jsload,on_jsload,reload_dependents,map__46615,map__46615__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46364_SHARP_){
var and__38383__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__46364_SHARP_);
if(cljs.core.truth_(and__38383__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__46364_SHARP_));
} else {
return and__38383__auto__;
}
});
;})(inst_46666,inst_46667,inst_46668,state_val_46769,c__43031__auto__,map__46614,map__46614__$1,opts,before_jsload,on_jsload,reload_dependents,map__46615,map__46615__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46670 = cljs.core.filter.call(null,inst_46669,files);
var inst_46671 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_46672 = cljs.core.concat.call(null,inst_46670,inst_46671);
var state_46768__$1 = (function (){var statearr_46783 = state_46768;
(statearr_46783[(17)] = inst_46668);

(statearr_46783[(12)] = inst_46672);

(statearr_46783[(18)] = inst_46666);

return statearr_46783;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_46784_46868 = state_46768__$1;
(statearr_46784_46868[(1)] = (16));

} else {
var statearr_46785_46869 = state_46768__$1;
(statearr_46785_46869[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (15))){
var inst_46656 = (state_46768[(2)]);
var state_46768__$1 = state_46768;
var statearr_46786_46870 = state_46768__$1;
(statearr_46786_46870[(2)] = inst_46656);

(statearr_46786_46870[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (21))){
var inst_46682 = (state_46768[(19)]);
var inst_46682__$1 = (state_46768[(2)]);
var inst_46683 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_46682__$1);
var state_46768__$1 = (function (){var statearr_46787 = state_46768;
(statearr_46787[(19)] = inst_46682__$1);

return statearr_46787;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46768__$1,(22),inst_46683);
} else {
if((state_val_46769 === (31))){
var inst_46766 = (state_46768[(2)]);
var state_46768__$1 = state_46768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46768__$1,inst_46766);
} else {
if((state_val_46769 === (32))){
var inst_46722 = (state_46768[(16)]);
var inst_46727 = inst_46722.cljs$lang$protocol_mask$partition0$;
var inst_46728 = (inst_46727 & (64));
var inst_46729 = inst_46722.cljs$core$ISeq$;
var inst_46730 = (inst_46728) || (inst_46729);
var state_46768__$1 = state_46768;
if(cljs.core.truth_(inst_46730)){
var statearr_46788_46871 = state_46768__$1;
(statearr_46788_46871[(1)] = (35));

} else {
var statearr_46789_46872 = state_46768__$1;
(statearr_46789_46872[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (40))){
var inst_46743 = (state_46768[(20)]);
var inst_46742 = (state_46768[(2)]);
var inst_46743__$1 = cljs.core.get.call(null,inst_46742,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_46744 = cljs.core.get.call(null,inst_46742,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_46745 = cljs.core.not_empty.call(null,inst_46743__$1);
var state_46768__$1 = (function (){var statearr_46790 = state_46768;
(statearr_46790[(21)] = inst_46744);

(statearr_46790[(20)] = inst_46743__$1);

return statearr_46790;
})();
if(cljs.core.truth_(inst_46745)){
var statearr_46791_46873 = state_46768__$1;
(statearr_46791_46873[(1)] = (41));

} else {
var statearr_46792_46874 = state_46768__$1;
(statearr_46792_46874[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (33))){
var state_46768__$1 = state_46768;
var statearr_46793_46875 = state_46768__$1;
(statearr_46793_46875[(2)] = false);

(statearr_46793_46875[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (13))){
var inst_46642 = (state_46768[(22)]);
var inst_46646 = cljs.core.chunk_first.call(null,inst_46642);
var inst_46647 = cljs.core.chunk_rest.call(null,inst_46642);
var inst_46648 = cljs.core.count.call(null,inst_46646);
var inst_46629 = inst_46647;
var inst_46630 = inst_46646;
var inst_46631 = inst_46648;
var inst_46632 = (0);
var state_46768__$1 = (function (){var statearr_46794 = state_46768;
(statearr_46794[(7)] = inst_46629);

(statearr_46794[(8)] = inst_46631);

(statearr_46794[(9)] = inst_46630);

(statearr_46794[(10)] = inst_46632);

return statearr_46794;
})();
var statearr_46795_46876 = state_46768__$1;
(statearr_46795_46876[(2)] = null);

(statearr_46795_46876[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (22))){
var inst_46682 = (state_46768[(19)]);
var inst_46686 = (state_46768[(23)]);
var inst_46690 = (state_46768[(24)]);
var inst_46685 = (state_46768[(25)]);
var inst_46685__$1 = (state_46768[(2)]);
var inst_46686__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46685__$1);
var inst_46687 = (function (){var all_files = inst_46682;
var res_SINGLEQUOTE_ = inst_46685__$1;
var res = inst_46686__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_46682,inst_46686,inst_46690,inst_46685,inst_46685__$1,inst_46686__$1,state_val_46769,c__43031__auto__,map__46614,map__46614__$1,opts,before_jsload,on_jsload,reload_dependents,map__46615,map__46615__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46365_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__46365_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_46682,inst_46686,inst_46690,inst_46685,inst_46685__$1,inst_46686__$1,state_val_46769,c__43031__auto__,map__46614,map__46614__$1,opts,before_jsload,on_jsload,reload_dependents,map__46615,map__46615__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46688 = cljs.core.filter.call(null,inst_46687,inst_46685__$1);
var inst_46689 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_46690__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46689);
var inst_46691 = cljs.core.not_empty.call(null,inst_46690__$1);
var state_46768__$1 = (function (){var statearr_46796 = state_46768;
(statearr_46796[(26)] = inst_46688);

(statearr_46796[(23)] = inst_46686__$1);

(statearr_46796[(24)] = inst_46690__$1);

(statearr_46796[(25)] = inst_46685__$1);

return statearr_46796;
})();
if(cljs.core.truth_(inst_46691)){
var statearr_46797_46877 = state_46768__$1;
(statearr_46797_46877[(1)] = (23));

} else {
var statearr_46798_46878 = state_46768__$1;
(statearr_46798_46878[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (36))){
var state_46768__$1 = state_46768;
var statearr_46799_46879 = state_46768__$1;
(statearr_46799_46879[(2)] = false);

(statearr_46799_46879[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (41))){
var inst_46743 = (state_46768[(20)]);
var inst_46747 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_46748 = cljs.core.map.call(null,inst_46747,inst_46743);
var inst_46749 = cljs.core.pr_str.call(null,inst_46748);
var inst_46750 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_46749)].join('');
var inst_46751 = figwheel.client.utils.log.call(null,inst_46750);
var state_46768__$1 = state_46768;
var statearr_46800_46880 = state_46768__$1;
(statearr_46800_46880[(2)] = inst_46751);

(statearr_46800_46880[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (43))){
var inst_46744 = (state_46768[(21)]);
var inst_46754 = (state_46768[(2)]);
var inst_46755 = cljs.core.not_empty.call(null,inst_46744);
var state_46768__$1 = (function (){var statearr_46801 = state_46768;
(statearr_46801[(27)] = inst_46754);

return statearr_46801;
})();
if(cljs.core.truth_(inst_46755)){
var statearr_46802_46881 = state_46768__$1;
(statearr_46802_46881[(1)] = (44));

} else {
var statearr_46803_46882 = state_46768__$1;
(statearr_46803_46882[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (29))){
var inst_46682 = (state_46768[(19)]);
var inst_46688 = (state_46768[(26)]);
var inst_46686 = (state_46768[(23)]);
var inst_46690 = (state_46768[(24)]);
var inst_46685 = (state_46768[(25)]);
var inst_46722 = (state_46768[(16)]);
var inst_46718 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_46721 = (function (){var all_files = inst_46682;
var res_SINGLEQUOTE_ = inst_46685;
var res = inst_46686;
var files_not_loaded = inst_46688;
var dependencies_that_loaded = inst_46690;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46682,inst_46688,inst_46686,inst_46690,inst_46685,inst_46722,inst_46718,state_val_46769,c__43031__auto__,map__46614,map__46614__$1,opts,before_jsload,on_jsload,reload_dependents,map__46615,map__46615__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46720){
var map__46804 = p__46720;
var map__46804__$1 = ((((!((map__46804 == null)))?((((map__46804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46804):map__46804);
var namespace = cljs.core.get.call(null,map__46804__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46682,inst_46688,inst_46686,inst_46690,inst_46685,inst_46722,inst_46718,state_val_46769,c__43031__auto__,map__46614,map__46614__$1,opts,before_jsload,on_jsload,reload_dependents,map__46615,map__46615__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46722__$1 = cljs.core.group_by.call(null,inst_46721,inst_46688);
var inst_46724 = (inst_46722__$1 == null);
var inst_46725 = cljs.core.not.call(null,inst_46724);
var state_46768__$1 = (function (){var statearr_46806 = state_46768;
(statearr_46806[(28)] = inst_46718);

(statearr_46806[(16)] = inst_46722__$1);

return statearr_46806;
})();
if(inst_46725){
var statearr_46807_46883 = state_46768__$1;
(statearr_46807_46883[(1)] = (32));

} else {
var statearr_46808_46884 = state_46768__$1;
(statearr_46808_46884[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (44))){
var inst_46744 = (state_46768[(21)]);
var inst_46757 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46744);
var inst_46758 = cljs.core.pr_str.call(null,inst_46757);
var inst_46759 = [cljs.core.str("not required: "),cljs.core.str(inst_46758)].join('');
var inst_46760 = figwheel.client.utils.log.call(null,inst_46759);
var state_46768__$1 = state_46768;
var statearr_46809_46885 = state_46768__$1;
(statearr_46809_46885[(2)] = inst_46760);

(statearr_46809_46885[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (6))){
var inst_46663 = (state_46768[(2)]);
var state_46768__$1 = state_46768;
var statearr_46810_46886 = state_46768__$1;
(statearr_46810_46886[(2)] = inst_46663);

(statearr_46810_46886[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (28))){
var inst_46688 = (state_46768[(26)]);
var inst_46715 = (state_46768[(2)]);
var inst_46716 = cljs.core.not_empty.call(null,inst_46688);
var state_46768__$1 = (function (){var statearr_46811 = state_46768;
(statearr_46811[(29)] = inst_46715);

return statearr_46811;
})();
if(cljs.core.truth_(inst_46716)){
var statearr_46812_46887 = state_46768__$1;
(statearr_46812_46887[(1)] = (29));

} else {
var statearr_46813_46888 = state_46768__$1;
(statearr_46813_46888[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (25))){
var inst_46686 = (state_46768[(23)]);
var inst_46702 = (state_46768[(2)]);
var inst_46703 = cljs.core.not_empty.call(null,inst_46686);
var state_46768__$1 = (function (){var statearr_46814 = state_46768;
(statearr_46814[(30)] = inst_46702);

return statearr_46814;
})();
if(cljs.core.truth_(inst_46703)){
var statearr_46815_46889 = state_46768__$1;
(statearr_46815_46889[(1)] = (26));

} else {
var statearr_46816_46890 = state_46768__$1;
(statearr_46816_46890[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (34))){
var inst_46737 = (state_46768[(2)]);
var state_46768__$1 = state_46768;
if(cljs.core.truth_(inst_46737)){
var statearr_46817_46891 = state_46768__$1;
(statearr_46817_46891[(1)] = (38));

} else {
var statearr_46818_46892 = state_46768__$1;
(statearr_46818_46892[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (17))){
var state_46768__$1 = state_46768;
var statearr_46819_46893 = state_46768__$1;
(statearr_46819_46893[(2)] = recompile_dependents);

(statearr_46819_46893[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (3))){
var state_46768__$1 = state_46768;
var statearr_46820_46894 = state_46768__$1;
(statearr_46820_46894[(2)] = null);

(statearr_46820_46894[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (12))){
var inst_46659 = (state_46768[(2)]);
var state_46768__$1 = state_46768;
var statearr_46821_46895 = state_46768__$1;
(statearr_46821_46895[(2)] = inst_46659);

(statearr_46821_46895[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (2))){
var inst_46621 = (state_46768[(13)]);
var inst_46628 = cljs.core.seq.call(null,inst_46621);
var inst_46629 = inst_46628;
var inst_46630 = null;
var inst_46631 = (0);
var inst_46632 = (0);
var state_46768__$1 = (function (){var statearr_46822 = state_46768;
(statearr_46822[(7)] = inst_46629);

(statearr_46822[(8)] = inst_46631);

(statearr_46822[(9)] = inst_46630);

(statearr_46822[(10)] = inst_46632);

return statearr_46822;
})();
var statearr_46823_46896 = state_46768__$1;
(statearr_46823_46896[(2)] = null);

(statearr_46823_46896[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (23))){
var inst_46682 = (state_46768[(19)]);
var inst_46688 = (state_46768[(26)]);
var inst_46686 = (state_46768[(23)]);
var inst_46690 = (state_46768[(24)]);
var inst_46685 = (state_46768[(25)]);
var inst_46693 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_46695 = (function (){var all_files = inst_46682;
var res_SINGLEQUOTE_ = inst_46685;
var res = inst_46686;
var files_not_loaded = inst_46688;
var dependencies_that_loaded = inst_46690;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46682,inst_46688,inst_46686,inst_46690,inst_46685,inst_46693,state_val_46769,c__43031__auto__,map__46614,map__46614__$1,opts,before_jsload,on_jsload,reload_dependents,map__46615,map__46615__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46694){
var map__46824 = p__46694;
var map__46824__$1 = ((((!((map__46824 == null)))?((((map__46824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46824):map__46824);
var request_url = cljs.core.get.call(null,map__46824__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46682,inst_46688,inst_46686,inst_46690,inst_46685,inst_46693,state_val_46769,c__43031__auto__,map__46614,map__46614__$1,opts,before_jsload,on_jsload,reload_dependents,map__46615,map__46615__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46696 = cljs.core.reverse.call(null,inst_46690);
var inst_46697 = cljs.core.map.call(null,inst_46695,inst_46696);
var inst_46698 = cljs.core.pr_str.call(null,inst_46697);
var inst_46699 = figwheel.client.utils.log.call(null,inst_46698);
var state_46768__$1 = (function (){var statearr_46826 = state_46768;
(statearr_46826[(31)] = inst_46693);

return statearr_46826;
})();
var statearr_46827_46897 = state_46768__$1;
(statearr_46827_46897[(2)] = inst_46699);

(statearr_46827_46897[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (35))){
var state_46768__$1 = state_46768;
var statearr_46828_46898 = state_46768__$1;
(statearr_46828_46898[(2)] = true);

(statearr_46828_46898[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (19))){
var inst_46672 = (state_46768[(12)]);
var inst_46678 = figwheel.client.file_reloading.expand_files.call(null,inst_46672);
var state_46768__$1 = state_46768;
var statearr_46829_46899 = state_46768__$1;
(statearr_46829_46899[(2)] = inst_46678);

(statearr_46829_46899[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (11))){
var state_46768__$1 = state_46768;
var statearr_46830_46900 = state_46768__$1;
(statearr_46830_46900[(2)] = null);

(statearr_46830_46900[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (9))){
var inst_46661 = (state_46768[(2)]);
var state_46768__$1 = state_46768;
var statearr_46831_46901 = state_46768__$1;
(statearr_46831_46901[(2)] = inst_46661);

(statearr_46831_46901[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (5))){
var inst_46631 = (state_46768[(8)]);
var inst_46632 = (state_46768[(10)]);
var inst_46634 = (inst_46632 < inst_46631);
var inst_46635 = inst_46634;
var state_46768__$1 = state_46768;
if(cljs.core.truth_(inst_46635)){
var statearr_46832_46902 = state_46768__$1;
(statearr_46832_46902[(1)] = (7));

} else {
var statearr_46833_46903 = state_46768__$1;
(statearr_46833_46903[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (14))){
var inst_46642 = (state_46768[(22)]);
var inst_46651 = cljs.core.first.call(null,inst_46642);
var inst_46652 = figwheel.client.file_reloading.eval_body.call(null,inst_46651,opts);
var inst_46653 = cljs.core.next.call(null,inst_46642);
var inst_46629 = inst_46653;
var inst_46630 = null;
var inst_46631 = (0);
var inst_46632 = (0);
var state_46768__$1 = (function (){var statearr_46834 = state_46768;
(statearr_46834[(7)] = inst_46629);

(statearr_46834[(8)] = inst_46631);

(statearr_46834[(9)] = inst_46630);

(statearr_46834[(10)] = inst_46632);

(statearr_46834[(32)] = inst_46652);

return statearr_46834;
})();
var statearr_46835_46904 = state_46768__$1;
(statearr_46835_46904[(2)] = null);

(statearr_46835_46904[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (45))){
var state_46768__$1 = state_46768;
var statearr_46836_46905 = state_46768__$1;
(statearr_46836_46905[(2)] = null);

(statearr_46836_46905[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (26))){
var inst_46682 = (state_46768[(19)]);
var inst_46688 = (state_46768[(26)]);
var inst_46686 = (state_46768[(23)]);
var inst_46690 = (state_46768[(24)]);
var inst_46685 = (state_46768[(25)]);
var inst_46705 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_46707 = (function (){var all_files = inst_46682;
var res_SINGLEQUOTE_ = inst_46685;
var res = inst_46686;
var files_not_loaded = inst_46688;
var dependencies_that_loaded = inst_46690;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46682,inst_46688,inst_46686,inst_46690,inst_46685,inst_46705,state_val_46769,c__43031__auto__,map__46614,map__46614__$1,opts,before_jsload,on_jsload,reload_dependents,map__46615,map__46615__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46706){
var map__46837 = p__46706;
var map__46837__$1 = ((((!((map__46837 == null)))?((((map__46837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46837):map__46837);
var namespace = cljs.core.get.call(null,map__46837__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__46837__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46682,inst_46688,inst_46686,inst_46690,inst_46685,inst_46705,state_val_46769,c__43031__auto__,map__46614,map__46614__$1,opts,before_jsload,on_jsload,reload_dependents,map__46615,map__46615__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46708 = cljs.core.map.call(null,inst_46707,inst_46686);
var inst_46709 = cljs.core.pr_str.call(null,inst_46708);
var inst_46710 = figwheel.client.utils.log.call(null,inst_46709);
var inst_46711 = (function (){var all_files = inst_46682;
var res_SINGLEQUOTE_ = inst_46685;
var res = inst_46686;
var files_not_loaded = inst_46688;
var dependencies_that_loaded = inst_46690;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46682,inst_46688,inst_46686,inst_46690,inst_46685,inst_46705,inst_46707,inst_46708,inst_46709,inst_46710,state_val_46769,c__43031__auto__,map__46614,map__46614__$1,opts,before_jsload,on_jsload,reload_dependents,map__46615,map__46615__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46682,inst_46688,inst_46686,inst_46690,inst_46685,inst_46705,inst_46707,inst_46708,inst_46709,inst_46710,state_val_46769,c__43031__auto__,map__46614,map__46614__$1,opts,before_jsload,on_jsload,reload_dependents,map__46615,map__46615__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46712 = setTimeout(inst_46711,(10));
var state_46768__$1 = (function (){var statearr_46839 = state_46768;
(statearr_46839[(33)] = inst_46710);

(statearr_46839[(34)] = inst_46705);

return statearr_46839;
})();
var statearr_46840_46906 = state_46768__$1;
(statearr_46840_46906[(2)] = inst_46712);

(statearr_46840_46906[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (16))){
var state_46768__$1 = state_46768;
var statearr_46841_46907 = state_46768__$1;
(statearr_46841_46907[(2)] = reload_dependents);

(statearr_46841_46907[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (38))){
var inst_46722 = (state_46768[(16)]);
var inst_46739 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46722);
var state_46768__$1 = state_46768;
var statearr_46842_46908 = state_46768__$1;
(statearr_46842_46908[(2)] = inst_46739);

(statearr_46842_46908[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (30))){
var state_46768__$1 = state_46768;
var statearr_46843_46909 = state_46768__$1;
(statearr_46843_46909[(2)] = null);

(statearr_46843_46909[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (10))){
var inst_46642 = (state_46768[(22)]);
var inst_46644 = cljs.core.chunked_seq_QMARK_.call(null,inst_46642);
var state_46768__$1 = state_46768;
if(inst_46644){
var statearr_46844_46910 = state_46768__$1;
(statearr_46844_46910[(1)] = (13));

} else {
var statearr_46845_46911 = state_46768__$1;
(statearr_46845_46911[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (18))){
var inst_46676 = (state_46768[(2)]);
var state_46768__$1 = state_46768;
if(cljs.core.truth_(inst_46676)){
var statearr_46846_46912 = state_46768__$1;
(statearr_46846_46912[(1)] = (19));

} else {
var statearr_46847_46913 = state_46768__$1;
(statearr_46847_46913[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (42))){
var state_46768__$1 = state_46768;
var statearr_46848_46914 = state_46768__$1;
(statearr_46848_46914[(2)] = null);

(statearr_46848_46914[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (37))){
var inst_46734 = (state_46768[(2)]);
var state_46768__$1 = state_46768;
var statearr_46849_46915 = state_46768__$1;
(statearr_46849_46915[(2)] = inst_46734);

(statearr_46849_46915[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (8))){
var inst_46629 = (state_46768[(7)]);
var inst_46642 = (state_46768[(22)]);
var inst_46642__$1 = cljs.core.seq.call(null,inst_46629);
var state_46768__$1 = (function (){var statearr_46850 = state_46768;
(statearr_46850[(22)] = inst_46642__$1);

return statearr_46850;
})();
if(inst_46642__$1){
var statearr_46851_46916 = state_46768__$1;
(statearr_46851_46916[(1)] = (10));

} else {
var statearr_46852_46917 = state_46768__$1;
(statearr_46852_46917[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43031__auto__,map__46614,map__46614__$1,opts,before_jsload,on_jsload,reload_dependents,map__46615,map__46615__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__42919__auto__,c__43031__auto__,map__46614,map__46614__$1,opts,before_jsload,on_jsload,reload_dependents,map__46615,map__46615__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__42920__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__42920__auto____0 = (function (){
var statearr_46856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46856[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__42920__auto__);

(statearr_46856[(1)] = (1));

return statearr_46856;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__42920__auto____1 = (function (state_46768){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_46768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e46857){if((e46857 instanceof Object)){
var ex__42923__auto__ = e46857;
var statearr_46858_46918 = state_46768;
(statearr_46858_46918[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46919 = state_46768;
state_46768 = G__46919;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__42920__auto__ = function(state_46768){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__42920__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__42920__auto____1.call(this,state_46768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__42920__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__42920__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__42920__auto__;
})()
;})(switch__42919__auto__,c__43031__auto__,map__46614,map__46614__$1,opts,before_jsload,on_jsload,reload_dependents,map__46615,map__46615__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__43033__auto__ = (function (){var statearr_46859 = f__43032__auto__.call(null);
(statearr_46859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto__);

return statearr_46859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(c__43031__auto__,map__46614,map__46614__$1,opts,before_jsload,on_jsload,reload_dependents,map__46615,map__46615__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__43031__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__46922,link){
var map__46925 = p__46922;
var map__46925__$1 = ((((!((map__46925 == null)))?((((map__46925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46925):map__46925);
var file = cljs.core.get.call(null,map__46925__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__46925,map__46925__$1,file){
return (function (p1__46920_SHARP_,p2__46921_SHARP_){
if(cljs.core._EQ_.call(null,p1__46920_SHARP_,p2__46921_SHARP_)){
return p1__46920_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__46925,map__46925__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__46931){
var map__46932 = p__46931;
var map__46932__$1 = ((((!((map__46932 == null)))?((((map__46932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46932):map__46932);
var match_length = cljs.core.get.call(null,map__46932__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__46932__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__46927_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__46927_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args46934 = [];
var len__39470__auto___46937 = arguments.length;
var i__39471__auto___46938 = (0);
while(true){
if((i__39471__auto___46938 < len__39470__auto___46937)){
args46934.push((arguments[i__39471__auto___46938]));

var G__46939 = (i__39471__auto___46938 + (1));
i__39471__auto___46938 = G__46939;
continue;
} else {
}
break;
}

var G__46936 = args46934.length;
switch (G__46936) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46934.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__46941_SHARP_,p2__46942_SHARP_){
return cljs.core.assoc.call(null,p1__46941_SHARP_,cljs.core.get.call(null,p2__46942_SHARP_,key),p2__46942_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__46943){
var map__46946 = p__46943;
var map__46946__$1 = ((((!((map__46946 == null)))?((((map__46946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46946):map__46946);
var f_data = map__46946__$1;
var file = cljs.core.get.call(null,map__46946__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__46948,files_msg){
var map__46955 = p__46948;
var map__46955__$1 = ((((!((map__46955 == null)))?((((map__46955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46955):map__46955);
var opts = map__46955__$1;
var on_cssload = cljs.core.get.call(null,map__46955__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__46957_46961 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__46958_46962 = null;
var count__46959_46963 = (0);
var i__46960_46964 = (0);
while(true){
if((i__46960_46964 < count__46959_46963)){
var f_46965 = cljs.core._nth.call(null,chunk__46958_46962,i__46960_46964);
figwheel.client.file_reloading.reload_css_file.call(null,f_46965);

var G__46966 = seq__46957_46961;
var G__46967 = chunk__46958_46962;
var G__46968 = count__46959_46963;
var G__46969 = (i__46960_46964 + (1));
seq__46957_46961 = G__46966;
chunk__46958_46962 = G__46967;
count__46959_46963 = G__46968;
i__46960_46964 = G__46969;
continue;
} else {
var temp__4657__auto___46970 = cljs.core.seq.call(null,seq__46957_46961);
if(temp__4657__auto___46970){
var seq__46957_46971__$1 = temp__4657__auto___46970;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46957_46971__$1)){
var c__39206__auto___46972 = cljs.core.chunk_first.call(null,seq__46957_46971__$1);
var G__46973 = cljs.core.chunk_rest.call(null,seq__46957_46971__$1);
var G__46974 = c__39206__auto___46972;
var G__46975 = cljs.core.count.call(null,c__39206__auto___46972);
var G__46976 = (0);
seq__46957_46961 = G__46973;
chunk__46958_46962 = G__46974;
count__46959_46963 = G__46975;
i__46960_46964 = G__46976;
continue;
} else {
var f_46977 = cljs.core.first.call(null,seq__46957_46971__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_46977);

var G__46978 = cljs.core.next.call(null,seq__46957_46971__$1);
var G__46979 = null;
var G__46980 = (0);
var G__46981 = (0);
seq__46957_46961 = G__46978;
chunk__46958_46962 = G__46979;
count__46959_46963 = G__46980;
i__46960_46964 = G__46981;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__46955,map__46955__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__46955,map__46955__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1466122641275