// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__39001__auto__,writer__39002__auto__,opt__39003__auto__){
return cljs.core._write.call(null,writer__39002__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47035 = arguments.length;
var i__39471__auto___47036 = (0);
while(true){
if((i__39471__auto___47036 < len__39470__auto___47035)){
args__39477__auto__.push((arguments[i__39471__auto___47036]));

var G__47037 = (i__39471__auto___47036 + (1));
i__39471__auto___47036 = G__47037;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq47034){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47034));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47039 = arguments.length;
var i__39471__auto___47040 = (0);
while(true){
if((i__39471__auto___47040 < len__39470__auto___47039)){
args__39477__auto__.push((arguments[i__39471__auto___47040]));

var G__47041 = (i__39471__auto___47040 + (1));
i__39471__auto___47040 = G__47041;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq47038){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47038));
});

var g_QMARK__47042 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_47043 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__47042){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__47042))
,null));
var mkg_47044 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__47042,g_47043){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__47042,g_47043))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__47042,g_47043,mkg_47044){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__47042).call(null,x);
});})(g_QMARK__47042,g_47043,mkg_47044))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__47042,g_47043,mkg_47044){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_47044).call(null,gfn);
});})(g_QMARK__47042,g_47043,mkg_47044))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__47042,g_47043,mkg_47044){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_47043).call(null,generator);
});})(g_QMARK__47042,g_47043,mkg_47044))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__47006__auto___47060 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__47006__auto___47060){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47061 = arguments.length;
var i__39471__auto___47062 = (0);
while(true){
if((i__39471__auto___47062 < len__39470__auto___47061)){
args__39477__auto__.push((arguments[i__39471__auto___47062]));

var G__47063 = (i__39471__auto___47062 + (1));
i__39471__auto___47062 = G__47063;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47006__auto___47060))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47006__auto___47060){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47006__auto___47060),args);
});})(g__47006__auto___47060))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__47006__auto___47060){
return (function (seq47045){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47045));
});})(g__47006__auto___47060))
;


var g__47006__auto___47064 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__47006__auto___47064){
return (function cljs$spec$impl$gen$list(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47065 = arguments.length;
var i__39471__auto___47066 = (0);
while(true){
if((i__39471__auto___47066 < len__39470__auto___47065)){
args__39477__auto__.push((arguments[i__39471__auto___47066]));

var G__47067 = (i__39471__auto___47066 + (1));
i__39471__auto___47066 = G__47067;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47006__auto___47064))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47006__auto___47064){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47006__auto___47064),args);
});})(g__47006__auto___47064))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__47006__auto___47064){
return (function (seq47046){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47046));
});})(g__47006__auto___47064))
;


var g__47006__auto___47068 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__47006__auto___47068){
return (function cljs$spec$impl$gen$map(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47069 = arguments.length;
var i__39471__auto___47070 = (0);
while(true){
if((i__39471__auto___47070 < len__39470__auto___47069)){
args__39477__auto__.push((arguments[i__39471__auto___47070]));

var G__47071 = (i__39471__auto___47070 + (1));
i__39471__auto___47070 = G__47071;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47006__auto___47068))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47006__auto___47068){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47006__auto___47068),args);
});})(g__47006__auto___47068))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__47006__auto___47068){
return (function (seq47047){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47047));
});})(g__47006__auto___47068))
;


var g__47006__auto___47072 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__47006__auto___47072){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47073 = arguments.length;
var i__39471__auto___47074 = (0);
while(true){
if((i__39471__auto___47074 < len__39470__auto___47073)){
args__39477__auto__.push((arguments[i__39471__auto___47074]));

var G__47075 = (i__39471__auto___47074 + (1));
i__39471__auto___47074 = G__47075;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47006__auto___47072))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47006__auto___47072){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47006__auto___47072),args);
});})(g__47006__auto___47072))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__47006__auto___47072){
return (function (seq47048){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47048));
});})(g__47006__auto___47072))
;


var g__47006__auto___47076 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__47006__auto___47076){
return (function cljs$spec$impl$gen$set(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47077 = arguments.length;
var i__39471__auto___47078 = (0);
while(true){
if((i__39471__auto___47078 < len__39470__auto___47077)){
args__39477__auto__.push((arguments[i__39471__auto___47078]));

var G__47079 = (i__39471__auto___47078 + (1));
i__39471__auto___47078 = G__47079;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47006__auto___47076))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47006__auto___47076){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47006__auto___47076),args);
});})(g__47006__auto___47076))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__47006__auto___47076){
return (function (seq47049){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47049));
});})(g__47006__auto___47076))
;


var g__47006__auto___47080 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__47006__auto___47080){
return (function cljs$spec$impl$gen$vector(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47081 = arguments.length;
var i__39471__auto___47082 = (0);
while(true){
if((i__39471__auto___47082 < len__39470__auto___47081)){
args__39477__auto__.push((arguments[i__39471__auto___47082]));

var G__47083 = (i__39471__auto___47082 + (1));
i__39471__auto___47082 = G__47083;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47006__auto___47080))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47006__auto___47080){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47006__auto___47080),args);
});})(g__47006__auto___47080))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__47006__auto___47080){
return (function (seq47050){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47050));
});})(g__47006__auto___47080))
;


var g__47006__auto___47084 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__47006__auto___47084){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47085 = arguments.length;
var i__39471__auto___47086 = (0);
while(true){
if((i__39471__auto___47086 < len__39470__auto___47085)){
args__39477__auto__.push((arguments[i__39471__auto___47086]));

var G__47087 = (i__39471__auto___47086 + (1));
i__39471__auto___47086 = G__47087;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47006__auto___47084))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47006__auto___47084){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47006__auto___47084),args);
});})(g__47006__auto___47084))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__47006__auto___47084){
return (function (seq47051){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47051));
});})(g__47006__auto___47084))
;


var g__47006__auto___47088 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__47006__auto___47088){
return (function cljs$spec$impl$gen$elements(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47089 = arguments.length;
var i__39471__auto___47090 = (0);
while(true){
if((i__39471__auto___47090 < len__39470__auto___47089)){
args__39477__auto__.push((arguments[i__39471__auto___47090]));

var G__47091 = (i__39471__auto___47090 + (1));
i__39471__auto___47090 = G__47091;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47006__auto___47088))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47006__auto___47088){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47006__auto___47088),args);
});})(g__47006__auto___47088))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__47006__auto___47088){
return (function (seq47052){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47052));
});})(g__47006__auto___47088))
;


var g__47006__auto___47092 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__47006__auto___47092){
return (function cljs$spec$impl$gen$bind(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47093 = arguments.length;
var i__39471__auto___47094 = (0);
while(true){
if((i__39471__auto___47094 < len__39470__auto___47093)){
args__39477__auto__.push((arguments[i__39471__auto___47094]));

var G__47095 = (i__39471__auto___47094 + (1));
i__39471__auto___47094 = G__47095;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47006__auto___47092))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47006__auto___47092){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47006__auto___47092),args);
});})(g__47006__auto___47092))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__47006__auto___47092){
return (function (seq47053){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47053));
});})(g__47006__auto___47092))
;


var g__47006__auto___47096 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__47006__auto___47096){
return (function cljs$spec$impl$gen$choose(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47097 = arguments.length;
var i__39471__auto___47098 = (0);
while(true){
if((i__39471__auto___47098 < len__39470__auto___47097)){
args__39477__auto__.push((arguments[i__39471__auto___47098]));

var G__47099 = (i__39471__auto___47098 + (1));
i__39471__auto___47098 = G__47099;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47006__auto___47096))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47006__auto___47096){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47006__auto___47096),args);
});})(g__47006__auto___47096))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__47006__auto___47096){
return (function (seq47054){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47054));
});})(g__47006__auto___47096))
;


var g__47006__auto___47100 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__47006__auto___47100){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47101 = arguments.length;
var i__39471__auto___47102 = (0);
while(true){
if((i__39471__auto___47102 < len__39470__auto___47101)){
args__39477__auto__.push((arguments[i__39471__auto___47102]));

var G__47103 = (i__39471__auto___47102 + (1));
i__39471__auto___47102 = G__47103;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47006__auto___47100))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47006__auto___47100){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47006__auto___47100),args);
});})(g__47006__auto___47100))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__47006__auto___47100){
return (function (seq47055){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47055));
});})(g__47006__auto___47100))
;


var g__47006__auto___47104 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__47006__auto___47104){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47105 = arguments.length;
var i__39471__auto___47106 = (0);
while(true){
if((i__39471__auto___47106 < len__39470__auto___47105)){
args__39477__auto__.push((arguments[i__39471__auto___47106]));

var G__47107 = (i__39471__auto___47106 + (1));
i__39471__auto___47106 = G__47107;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47006__auto___47104))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47006__auto___47104){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47006__auto___47104),args);
});})(g__47006__auto___47104))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__47006__auto___47104){
return (function (seq47056){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47056));
});})(g__47006__auto___47104))
;


var g__47006__auto___47108 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__47006__auto___47108){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47109 = arguments.length;
var i__39471__auto___47110 = (0);
while(true){
if((i__39471__auto___47110 < len__39470__auto___47109)){
args__39477__auto__.push((arguments[i__39471__auto___47110]));

var G__47111 = (i__39471__auto___47110 + (1));
i__39471__auto___47110 = G__47111;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47006__auto___47108))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47006__auto___47108){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47006__auto___47108),args);
});})(g__47006__auto___47108))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__47006__auto___47108){
return (function (seq47057){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47057));
});})(g__47006__auto___47108))
;


var g__47006__auto___47112 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__47006__auto___47112){
return (function cljs$spec$impl$gen$sample(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47113 = arguments.length;
var i__39471__auto___47114 = (0);
while(true){
if((i__39471__auto___47114 < len__39470__auto___47113)){
args__39477__auto__.push((arguments[i__39471__auto___47114]));

var G__47115 = (i__39471__auto___47114 + (1));
i__39471__auto___47114 = G__47115;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47006__auto___47112))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47006__auto___47112){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47006__auto___47112),args);
});})(g__47006__auto___47112))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__47006__auto___47112){
return (function (seq47058){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47058));
});})(g__47006__auto___47112))
;


var g__47006__auto___47116 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__47006__auto___47116){
return (function cljs$spec$impl$gen$return(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47117 = arguments.length;
var i__39471__auto___47118 = (0);
while(true){
if((i__39471__auto___47118 < len__39470__auto___47117)){
args__39477__auto__.push((arguments[i__39471__auto___47118]));

var G__47119 = (i__39471__auto___47118 + (1));
i__39471__auto___47118 = G__47119;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47006__auto___47116))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47006__auto___47116){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47006__auto___47116),args);
});})(g__47006__auto___47116))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__47006__auto___47116){
return (function (seq47059){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47059));
});})(g__47006__auto___47116))
;

var g__47019__auto___47141 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__47019__auto___47141){
return (function cljs$spec$impl$gen$any(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47142 = arguments.length;
var i__39471__auto___47143 = (0);
while(true){
if((i__39471__auto___47143 < len__39470__auto___47142)){
args__39477__auto__.push((arguments[i__39471__auto___47143]));

var G__47144 = (i__39471__auto___47143 + (1));
i__39471__auto___47143 = G__47144;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47019__auto___47141))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47019__auto___47141){
return (function (args){
return cljs.core.deref.call(null,g__47019__auto___47141);
});})(g__47019__auto___47141))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__47019__auto___47141){
return (function (seq47120){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47120));
});})(g__47019__auto___47141))
;


var g__47019__auto___47145 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__47019__auto___47145){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47146 = arguments.length;
var i__39471__auto___47147 = (0);
while(true){
if((i__39471__auto___47147 < len__39470__auto___47146)){
args__39477__auto__.push((arguments[i__39471__auto___47147]));

var G__47148 = (i__39471__auto___47147 + (1));
i__39471__auto___47147 = G__47148;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47019__auto___47145))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47019__auto___47145){
return (function (args){
return cljs.core.deref.call(null,g__47019__auto___47145);
});})(g__47019__auto___47145))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__47019__auto___47145){
return (function (seq47121){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47121));
});})(g__47019__auto___47145))
;


var g__47019__auto___47149 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__47019__auto___47149){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47150 = arguments.length;
var i__39471__auto___47151 = (0);
while(true){
if((i__39471__auto___47151 < len__39470__auto___47150)){
args__39477__auto__.push((arguments[i__39471__auto___47151]));

var G__47152 = (i__39471__auto___47151 + (1));
i__39471__auto___47151 = G__47152;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47019__auto___47149))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47019__auto___47149){
return (function (args){
return cljs.core.deref.call(null,g__47019__auto___47149);
});})(g__47019__auto___47149))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__47019__auto___47149){
return (function (seq47122){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47122));
});})(g__47019__auto___47149))
;


var g__47019__auto___47153 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__47019__auto___47153){
return (function cljs$spec$impl$gen$char(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47154 = arguments.length;
var i__39471__auto___47155 = (0);
while(true){
if((i__39471__auto___47155 < len__39470__auto___47154)){
args__39477__auto__.push((arguments[i__39471__auto___47155]));

var G__47156 = (i__39471__auto___47155 + (1));
i__39471__auto___47155 = G__47156;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47019__auto___47153))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47019__auto___47153){
return (function (args){
return cljs.core.deref.call(null,g__47019__auto___47153);
});})(g__47019__auto___47153))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__47019__auto___47153){
return (function (seq47123){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47123));
});})(g__47019__auto___47153))
;


var g__47019__auto___47157 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__47019__auto___47157){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47158 = arguments.length;
var i__39471__auto___47159 = (0);
while(true){
if((i__39471__auto___47159 < len__39470__auto___47158)){
args__39477__auto__.push((arguments[i__39471__auto___47159]));

var G__47160 = (i__39471__auto___47159 + (1));
i__39471__auto___47159 = G__47160;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47019__auto___47157))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47019__auto___47157){
return (function (args){
return cljs.core.deref.call(null,g__47019__auto___47157);
});})(g__47019__auto___47157))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__47019__auto___47157){
return (function (seq47124){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47124));
});})(g__47019__auto___47157))
;


var g__47019__auto___47161 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__47019__auto___47161){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47162 = arguments.length;
var i__39471__auto___47163 = (0);
while(true){
if((i__39471__auto___47163 < len__39470__auto___47162)){
args__39477__auto__.push((arguments[i__39471__auto___47163]));

var G__47164 = (i__39471__auto___47163 + (1));
i__39471__auto___47163 = G__47164;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47019__auto___47161))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47019__auto___47161){
return (function (args){
return cljs.core.deref.call(null,g__47019__auto___47161);
});})(g__47019__auto___47161))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__47019__auto___47161){
return (function (seq47125){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47125));
});})(g__47019__auto___47161))
;


var g__47019__auto___47165 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__47019__auto___47165){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47166 = arguments.length;
var i__39471__auto___47167 = (0);
while(true){
if((i__39471__auto___47167 < len__39470__auto___47166)){
args__39477__auto__.push((arguments[i__39471__auto___47167]));

var G__47168 = (i__39471__auto___47167 + (1));
i__39471__auto___47167 = G__47168;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47019__auto___47165))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47019__auto___47165){
return (function (args){
return cljs.core.deref.call(null,g__47019__auto___47165);
});})(g__47019__auto___47165))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__47019__auto___47165){
return (function (seq47126){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47126));
});})(g__47019__auto___47165))
;


var g__47019__auto___47169 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__47019__auto___47169){
return (function cljs$spec$impl$gen$double(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47170 = arguments.length;
var i__39471__auto___47171 = (0);
while(true){
if((i__39471__auto___47171 < len__39470__auto___47170)){
args__39477__auto__.push((arguments[i__39471__auto___47171]));

var G__47172 = (i__39471__auto___47171 + (1));
i__39471__auto___47171 = G__47172;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47019__auto___47169))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47019__auto___47169){
return (function (args){
return cljs.core.deref.call(null,g__47019__auto___47169);
});})(g__47019__auto___47169))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__47019__auto___47169){
return (function (seq47127){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47127));
});})(g__47019__auto___47169))
;


var g__47019__auto___47173 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__47019__auto___47173){
return (function cljs$spec$impl$gen$int(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47174 = arguments.length;
var i__39471__auto___47175 = (0);
while(true){
if((i__39471__auto___47175 < len__39470__auto___47174)){
args__39477__auto__.push((arguments[i__39471__auto___47175]));

var G__47176 = (i__39471__auto___47175 + (1));
i__39471__auto___47175 = G__47176;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47019__auto___47173))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47019__auto___47173){
return (function (args){
return cljs.core.deref.call(null,g__47019__auto___47173);
});})(g__47019__auto___47173))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__47019__auto___47173){
return (function (seq47128){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47128));
});})(g__47019__auto___47173))
;


var g__47019__auto___47177 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__47019__auto___47177){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47178 = arguments.length;
var i__39471__auto___47179 = (0);
while(true){
if((i__39471__auto___47179 < len__39470__auto___47178)){
args__39477__auto__.push((arguments[i__39471__auto___47179]));

var G__47180 = (i__39471__auto___47179 + (1));
i__39471__auto___47179 = G__47180;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47019__auto___47177))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47019__auto___47177){
return (function (args){
return cljs.core.deref.call(null,g__47019__auto___47177);
});})(g__47019__auto___47177))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__47019__auto___47177){
return (function (seq47129){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47129));
});})(g__47019__auto___47177))
;


var g__47019__auto___47181 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__47019__auto___47181){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47182 = arguments.length;
var i__39471__auto___47183 = (0);
while(true){
if((i__39471__auto___47183 < len__39470__auto___47182)){
args__39477__auto__.push((arguments[i__39471__auto___47183]));

var G__47184 = (i__39471__auto___47183 + (1));
i__39471__auto___47183 = G__47184;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47019__auto___47181))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47019__auto___47181){
return (function (args){
return cljs.core.deref.call(null,g__47019__auto___47181);
});})(g__47019__auto___47181))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__47019__auto___47181){
return (function (seq47130){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47130));
});})(g__47019__auto___47181))
;


var g__47019__auto___47185 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__47019__auto___47185){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47186 = arguments.length;
var i__39471__auto___47187 = (0);
while(true){
if((i__39471__auto___47187 < len__39470__auto___47186)){
args__39477__auto__.push((arguments[i__39471__auto___47187]));

var G__47188 = (i__39471__auto___47187 + (1));
i__39471__auto___47187 = G__47188;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47019__auto___47185))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47019__auto___47185){
return (function (args){
return cljs.core.deref.call(null,g__47019__auto___47185);
});})(g__47019__auto___47185))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__47019__auto___47185){
return (function (seq47131){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47131));
});})(g__47019__auto___47185))
;


var g__47019__auto___47189 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__47019__auto___47189){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47190 = arguments.length;
var i__39471__auto___47191 = (0);
while(true){
if((i__39471__auto___47191 < len__39470__auto___47190)){
args__39477__auto__.push((arguments[i__39471__auto___47191]));

var G__47192 = (i__39471__auto___47191 + (1));
i__39471__auto___47191 = G__47192;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47019__auto___47189))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47019__auto___47189){
return (function (args){
return cljs.core.deref.call(null,g__47019__auto___47189);
});})(g__47019__auto___47189))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__47019__auto___47189){
return (function (seq47132){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47132));
});})(g__47019__auto___47189))
;


var g__47019__auto___47193 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__47019__auto___47193){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47194 = arguments.length;
var i__39471__auto___47195 = (0);
while(true){
if((i__39471__auto___47195 < len__39470__auto___47194)){
args__39477__auto__.push((arguments[i__39471__auto___47195]));

var G__47196 = (i__39471__auto___47195 + (1));
i__39471__auto___47195 = G__47196;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47019__auto___47193))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47019__auto___47193){
return (function (args){
return cljs.core.deref.call(null,g__47019__auto___47193);
});})(g__47019__auto___47193))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__47019__auto___47193){
return (function (seq47133){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47133));
});})(g__47019__auto___47193))
;


var g__47019__auto___47197 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__47019__auto___47197){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47198 = arguments.length;
var i__39471__auto___47199 = (0);
while(true){
if((i__39471__auto___47199 < len__39470__auto___47198)){
args__39477__auto__.push((arguments[i__39471__auto___47199]));

var G__47200 = (i__39471__auto___47199 + (1));
i__39471__auto___47199 = G__47200;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47019__auto___47197))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47019__auto___47197){
return (function (args){
return cljs.core.deref.call(null,g__47019__auto___47197);
});})(g__47019__auto___47197))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__47019__auto___47197){
return (function (seq47134){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47134));
});})(g__47019__auto___47197))
;


var g__47019__auto___47201 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__47019__auto___47201){
return (function cljs$spec$impl$gen$string(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47202 = arguments.length;
var i__39471__auto___47203 = (0);
while(true){
if((i__39471__auto___47203 < len__39470__auto___47202)){
args__39477__auto__.push((arguments[i__39471__auto___47203]));

var G__47204 = (i__39471__auto___47203 + (1));
i__39471__auto___47203 = G__47204;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47019__auto___47201))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47019__auto___47201){
return (function (args){
return cljs.core.deref.call(null,g__47019__auto___47201);
});})(g__47019__auto___47201))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__47019__auto___47201){
return (function (seq47135){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47135));
});})(g__47019__auto___47201))
;


var g__47019__auto___47205 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__47019__auto___47205){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47206 = arguments.length;
var i__39471__auto___47207 = (0);
while(true){
if((i__39471__auto___47207 < len__39470__auto___47206)){
args__39477__auto__.push((arguments[i__39471__auto___47207]));

var G__47208 = (i__39471__auto___47207 + (1));
i__39471__auto___47207 = G__47208;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47019__auto___47205))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47019__auto___47205){
return (function (args){
return cljs.core.deref.call(null,g__47019__auto___47205);
});})(g__47019__auto___47205))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__47019__auto___47205){
return (function (seq47136){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47136));
});})(g__47019__auto___47205))
;


var g__47019__auto___47209 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__47019__auto___47209){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47210 = arguments.length;
var i__39471__auto___47211 = (0);
while(true){
if((i__39471__auto___47211 < len__39470__auto___47210)){
args__39477__auto__.push((arguments[i__39471__auto___47211]));

var G__47212 = (i__39471__auto___47211 + (1));
i__39471__auto___47211 = G__47212;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47019__auto___47209))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47019__auto___47209){
return (function (args){
return cljs.core.deref.call(null,g__47019__auto___47209);
});})(g__47019__auto___47209))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__47019__auto___47209){
return (function (seq47137){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47137));
});})(g__47019__auto___47209))
;


var g__47019__auto___47213 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__47019__auto___47213){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47214 = arguments.length;
var i__39471__auto___47215 = (0);
while(true){
if((i__39471__auto___47215 < len__39470__auto___47214)){
args__39477__auto__.push((arguments[i__39471__auto___47215]));

var G__47216 = (i__39471__auto___47215 + (1));
i__39471__auto___47215 = G__47216;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47019__auto___47213))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47019__auto___47213){
return (function (args){
return cljs.core.deref.call(null,g__47019__auto___47213);
});})(g__47019__auto___47213))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__47019__auto___47213){
return (function (seq47138){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47138));
});})(g__47019__auto___47213))
;


var g__47019__auto___47217 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__47019__auto___47217){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47218 = arguments.length;
var i__39471__auto___47219 = (0);
while(true){
if((i__39471__auto___47219 < len__39470__auto___47218)){
args__39477__auto__.push((arguments[i__39471__auto___47219]));

var G__47220 = (i__39471__auto___47219 + (1));
i__39471__auto___47219 = G__47220;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47019__auto___47217))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47019__auto___47217){
return (function (args){
return cljs.core.deref.call(null,g__47019__auto___47217);
});})(g__47019__auto___47217))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__47019__auto___47217){
return (function (seq47139){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47139));
});})(g__47019__auto___47217))
;


var g__47019__auto___47221 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__47019__auto___47221){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47222 = arguments.length;
var i__39471__auto___47223 = (0);
while(true){
if((i__39471__auto___47223 < len__39470__auto___47222)){
args__39477__auto__.push((arguments[i__39471__auto___47223]));

var G__47224 = (i__39471__auto___47223 + (1));
i__39471__auto___47223 = G__47224;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});})(g__47019__auto___47221))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47019__auto___47221){
return (function (args){
return cljs.core.deref.call(null,g__47019__auto___47221);
});})(g__47019__auto___47221))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__47019__auto___47221){
return (function (seq47140){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47140));
});})(g__47019__auto___47221))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__39477__auto__ = [];
var len__39470__auto___47227 = arguments.length;
var i__39471__auto___47228 = (0);
while(true){
if((i__39471__auto___47228 < len__39470__auto___47227)){
args__39477__auto__.push((arguments[i__39471__auto___47228]));

var G__47229 = (i__39471__auto___47228 + (1));
i__39471__auto___47228 = G__47229;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((0) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__39478__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__47225_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__47225_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq47226){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47226));
});

cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.zero_QMARK_,cljs.core.nil_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.number_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1466122641672