// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args43076 = [];
var len__39470__auto___43082 = arguments.length;
var i__39471__auto___43083 = (0);
while(true){
if((i__39471__auto___43083 < len__39470__auto___43082)){
args43076.push((arguments[i__39471__auto___43083]));

var G__43084 = (i__39471__auto___43083 + (1));
i__39471__auto___43083 = G__43084;
continue;
} else {
}
break;
}

var G__43078 = args43076.length;
switch (G__43078) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43076.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async43079 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43079 = (function (f,blockable,meta43080){
this.f = f;
this.blockable = blockable;
this.meta43080 = meta43080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43081,meta43080__$1){
var self__ = this;
var _43081__$1 = this;
return (new cljs.core.async.t_cljs$core$async43079(self__.f,self__.blockable,meta43080__$1));
});

cljs.core.async.t_cljs$core$async43079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43081){
var self__ = this;
var _43081__$1 = this;
return self__.meta43080;
});

cljs.core.async.t_cljs$core$async43079.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async43079.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43079.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async43079.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async43079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43080","meta43080",747623607,null)], null);
});

cljs.core.async.t_cljs$core$async43079.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43079";

cljs.core.async.t_cljs$core$async43079.cljs$lang$ctorPrWriter = (function (this__39001__auto__,writer__39002__auto__,opt__39003__auto__){
return cljs.core._write.call(null,writer__39002__auto__,"cljs.core.async/t_cljs$core$async43079");
});

cljs.core.async.__GT_t_cljs$core$async43079 = (function cljs$core$async$__GT_t_cljs$core$async43079(f__$1,blockable__$1,meta43080){
return (new cljs.core.async.t_cljs$core$async43079(f__$1,blockable__$1,meta43080));
});

}

return (new cljs.core.async.t_cljs$core$async43079(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args43088 = [];
var len__39470__auto___43091 = arguments.length;
var i__39471__auto___43092 = (0);
while(true){
if((i__39471__auto___43092 < len__39470__auto___43091)){
args43088.push((arguments[i__39471__auto___43092]));

var G__43093 = (i__39471__auto___43092 + (1));
i__39471__auto___43092 = G__43093;
continue;
} else {
}
break;
}

var G__43090 = args43088.length;
switch (G__43090) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43088.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args43095 = [];
var len__39470__auto___43098 = arguments.length;
var i__39471__auto___43099 = (0);
while(true){
if((i__39471__auto___43099 < len__39470__auto___43098)){
args43095.push((arguments[i__39471__auto___43099]));

var G__43100 = (i__39471__auto___43099 + (1));
i__39471__auto___43099 = G__43100;
continue;
} else {
}
break;
}

var G__43097 = args43095.length;
switch (G__43097) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43095.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args43102 = [];
var len__39470__auto___43105 = arguments.length;
var i__39471__auto___43106 = (0);
while(true){
if((i__39471__auto___43106 < len__39470__auto___43105)){
args43102.push((arguments[i__39471__auto___43106]));

var G__43107 = (i__39471__auto___43106 + (1));
i__39471__auto___43106 = G__43107;
continue;
} else {
}
break;
}

var G__43104 = args43102.length;
switch (G__43104) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43102.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_43109 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_43109);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_43109,ret){
return (function (){
return fn1.call(null,val_43109);
});})(val_43109,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args43110 = [];
var len__39470__auto___43113 = arguments.length;
var i__39471__auto___43114 = (0);
while(true){
if((i__39471__auto___43114 < len__39470__auto___43113)){
args43110.push((arguments[i__39471__auto___43114]));

var G__43115 = (i__39471__auto___43114 + (1));
i__39471__auto___43114 = G__43115;
continue;
} else {
}
break;
}

var G__43112 = args43110.length;
switch (G__43112) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43110.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__39310__auto___43117 = n;
var x_43118 = (0);
while(true){
if((x_43118 < n__39310__auto___43117)){
(a[x_43118] = (0));

var G__43119 = (x_43118 + (1));
x_43118 = G__43119;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__43120 = (i + (1));
i = G__43120;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async43124 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43124 = (function (alt_flag,flag,meta43125){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta43125 = meta43125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_43126,meta43125__$1){
var self__ = this;
var _43126__$1 = this;
return (new cljs.core.async.t_cljs$core$async43124(self__.alt_flag,self__.flag,meta43125__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async43124.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_43126){
var self__ = this;
var _43126__$1 = this;
return self__.meta43125;
});})(flag))
;

cljs.core.async.t_cljs$core$async43124.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async43124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async43124.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43124.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43125","meta43125",1934485873,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async43124.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43124";

cljs.core.async.t_cljs$core$async43124.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__39001__auto__,writer__39002__auto__,opt__39003__auto__){
return cljs.core._write.call(null,writer__39002__auto__,"cljs.core.async/t_cljs$core$async43124");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async43124 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43124(alt_flag__$1,flag__$1,meta43125){
return (new cljs.core.async.t_cljs$core$async43124(alt_flag__$1,flag__$1,meta43125));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async43124(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async43130 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43130 = (function (alt_handler,flag,cb,meta43131){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta43131 = meta43131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43132,meta43131__$1){
var self__ = this;
var _43132__$1 = this;
return (new cljs.core.async.t_cljs$core$async43130(self__.alt_handler,self__.flag,self__.cb,meta43131__$1));
});

cljs.core.async.t_cljs$core$async43130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43132){
var self__ = this;
var _43132__$1 = this;
return self__.meta43131;
});

cljs.core.async.t_cljs$core$async43130.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async43130.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async43130.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43130.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async43130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43131","meta43131",1246205991,null)], null);
});

cljs.core.async.t_cljs$core$async43130.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43130";

cljs.core.async.t_cljs$core$async43130.cljs$lang$ctorPrWriter = (function (this__39001__auto__,writer__39002__auto__,opt__39003__auto__){
return cljs.core._write.call(null,writer__39002__auto__,"cljs.core.async/t_cljs$core$async43130");
});

cljs.core.async.__GT_t_cljs$core$async43130 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43130(alt_handler__$1,flag__$1,cb__$1,meta43131){
return (new cljs.core.async.t_cljs$core$async43130(alt_handler__$1,flag__$1,cb__$1,meta43131));
});

}

return (new cljs.core.async.t_cljs$core$async43130(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43133_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43133_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43134_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43134_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__38395__auto__ = wport;
if(cljs.core.truth_(or__38395__auto__)){
return or__38395__auto__;
} else {
return port;
}
})()], null));
} else {
var G__43135 = (i + (1));
i = G__43135;
continue;
}
} else {
return null;
}
break;
}
})();
var or__38395__auto__ = ret;
if(cljs.core.truth_(or__38395__auto__)){
return or__38395__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__38383__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__38383__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__38383__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__39477__auto__ = [];
var len__39470__auto___43141 = arguments.length;
var i__39471__auto___43142 = (0);
while(true){
if((i__39471__auto___43142 < len__39470__auto___43141)){
args__39477__auto__.push((arguments[i__39471__auto___43142]));

var G__43143 = (i__39471__auto___43142 + (1));
i__39471__auto___43142 = G__43143;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((1) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__39478__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43138){
var map__43139 = p__43138;
var map__43139__$1 = ((((!((map__43139 == null)))?((((map__43139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43139):map__43139);
var opts = map__43139__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43136){
var G__43137 = cljs.core.first.call(null,seq43136);
var seq43136__$1 = cljs.core.next.call(null,seq43136);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43137,seq43136__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args43144 = [];
var len__39470__auto___43194 = arguments.length;
var i__39471__auto___43195 = (0);
while(true){
if((i__39471__auto___43195 < len__39470__auto___43194)){
args43144.push((arguments[i__39471__auto___43195]));

var G__43196 = (i__39471__auto___43195 + (1));
i__39471__auto___43195 = G__43196;
continue;
} else {
}
break;
}

var G__43146 = args43144.length;
switch (G__43146) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43144.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__43031__auto___43198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43031__auto___43198){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (c__43031__auto___43198){
return (function (state_43170){
var state_val_43171 = (state_43170[(1)]);
if((state_val_43171 === (7))){
var inst_43166 = (state_43170[(2)]);
var state_43170__$1 = state_43170;
var statearr_43172_43199 = state_43170__$1;
(statearr_43172_43199[(2)] = inst_43166);

(statearr_43172_43199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43171 === (1))){
var state_43170__$1 = state_43170;
var statearr_43173_43200 = state_43170__$1;
(statearr_43173_43200[(2)] = null);

(statearr_43173_43200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43171 === (4))){
var inst_43149 = (state_43170[(7)]);
var inst_43149__$1 = (state_43170[(2)]);
var inst_43150 = (inst_43149__$1 == null);
var state_43170__$1 = (function (){var statearr_43174 = state_43170;
(statearr_43174[(7)] = inst_43149__$1);

return statearr_43174;
})();
if(cljs.core.truth_(inst_43150)){
var statearr_43175_43201 = state_43170__$1;
(statearr_43175_43201[(1)] = (5));

} else {
var statearr_43176_43202 = state_43170__$1;
(statearr_43176_43202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43171 === (13))){
var state_43170__$1 = state_43170;
var statearr_43177_43203 = state_43170__$1;
(statearr_43177_43203[(2)] = null);

(statearr_43177_43203[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43171 === (6))){
var inst_43149 = (state_43170[(7)]);
var state_43170__$1 = state_43170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43170__$1,(11),to,inst_43149);
} else {
if((state_val_43171 === (3))){
var inst_43168 = (state_43170[(2)]);
var state_43170__$1 = state_43170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43170__$1,inst_43168);
} else {
if((state_val_43171 === (12))){
var state_43170__$1 = state_43170;
var statearr_43178_43204 = state_43170__$1;
(statearr_43178_43204[(2)] = null);

(statearr_43178_43204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43171 === (2))){
var state_43170__$1 = state_43170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43170__$1,(4),from);
} else {
if((state_val_43171 === (11))){
var inst_43159 = (state_43170[(2)]);
var state_43170__$1 = state_43170;
if(cljs.core.truth_(inst_43159)){
var statearr_43179_43205 = state_43170__$1;
(statearr_43179_43205[(1)] = (12));

} else {
var statearr_43180_43206 = state_43170__$1;
(statearr_43180_43206[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43171 === (9))){
var state_43170__$1 = state_43170;
var statearr_43181_43207 = state_43170__$1;
(statearr_43181_43207[(2)] = null);

(statearr_43181_43207[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43171 === (5))){
var state_43170__$1 = state_43170;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43182_43208 = state_43170__$1;
(statearr_43182_43208[(1)] = (8));

} else {
var statearr_43183_43209 = state_43170__$1;
(statearr_43183_43209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43171 === (14))){
var inst_43164 = (state_43170[(2)]);
var state_43170__$1 = state_43170;
var statearr_43184_43210 = state_43170__$1;
(statearr_43184_43210[(2)] = inst_43164);

(statearr_43184_43210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43171 === (10))){
var inst_43156 = (state_43170[(2)]);
var state_43170__$1 = state_43170;
var statearr_43185_43211 = state_43170__$1;
(statearr_43185_43211[(2)] = inst_43156);

(statearr_43185_43211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43171 === (8))){
var inst_43153 = cljs.core.async.close_BANG_.call(null,to);
var state_43170__$1 = state_43170;
var statearr_43186_43212 = state_43170__$1;
(statearr_43186_43212[(2)] = inst_43153);

(statearr_43186_43212[(1)] = (10));


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
});})(c__43031__auto___43198))
;
return ((function (switch__42919__auto__,c__43031__auto___43198){
return (function() {
var cljs$core$async$state_machine__42920__auto__ = null;
var cljs$core$async$state_machine__42920__auto____0 = (function (){
var statearr_43190 = [null,null,null,null,null,null,null,null];
(statearr_43190[(0)] = cljs$core$async$state_machine__42920__auto__);

(statearr_43190[(1)] = (1));

return statearr_43190;
});
var cljs$core$async$state_machine__42920__auto____1 = (function (state_43170){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_43170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e43191){if((e43191 instanceof Object)){
var ex__42923__auto__ = e43191;
var statearr_43192_43213 = state_43170;
(statearr_43192_43213[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43214 = state_43170;
state_43170 = G__43214;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
cljs$core$async$state_machine__42920__auto__ = function(state_43170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42920__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42920__auto____1.call(this,state_43170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42920__auto____0;
cljs$core$async$state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42920__auto____1;
return cljs$core$async$state_machine__42920__auto__;
})()
;})(switch__42919__auto__,c__43031__auto___43198))
})();
var state__43033__auto__ = (function (){var statearr_43193 = f__43032__auto__.call(null);
(statearr_43193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto___43198);

return statearr_43193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(c__43031__auto___43198))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__43402){
var vec__43403 = p__43402;
var v = cljs.core.nth.call(null,vec__43403,(0),null);
var p = cljs.core.nth.call(null,vec__43403,(1),null);
var job = vec__43403;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__43031__auto___43589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43031__auto___43589,res,vec__43403,v,p,job,jobs,results){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (c__43031__auto___43589,res,vec__43403,v,p,job,jobs,results){
return (function (state_43410){
var state_val_43411 = (state_43410[(1)]);
if((state_val_43411 === (1))){
var state_43410__$1 = state_43410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43410__$1,(2),res,v);
} else {
if((state_val_43411 === (2))){
var inst_43407 = (state_43410[(2)]);
var inst_43408 = cljs.core.async.close_BANG_.call(null,res);
var state_43410__$1 = (function (){var statearr_43412 = state_43410;
(statearr_43412[(7)] = inst_43407);

return statearr_43412;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43410__$1,inst_43408);
} else {
return null;
}
}
});})(c__43031__auto___43589,res,vec__43403,v,p,job,jobs,results))
;
return ((function (switch__42919__auto__,c__43031__auto___43589,res,vec__43403,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____0 = (function (){
var statearr_43416 = [null,null,null,null,null,null,null,null];
(statearr_43416[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__);

(statearr_43416[(1)] = (1));

return statearr_43416;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____1 = (function (state_43410){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_43410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e43417){if((e43417 instanceof Object)){
var ex__42923__auto__ = e43417;
var statearr_43418_43590 = state_43410;
(statearr_43418_43590[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43591 = state_43410;
state_43410 = G__43591;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__ = function(state_43410){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____1.call(this,state_43410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__;
})()
;})(switch__42919__auto__,c__43031__auto___43589,res,vec__43403,v,p,job,jobs,results))
})();
var state__43033__auto__ = (function (){var statearr_43419 = f__43032__auto__.call(null);
(statearr_43419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto___43589);

return statearr_43419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(c__43031__auto___43589,res,vec__43403,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__43420){
var vec__43421 = p__43420;
var v = cljs.core.nth.call(null,vec__43421,(0),null);
var p = cljs.core.nth.call(null,vec__43421,(1),null);
var job = vec__43421;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__39310__auto___43592 = n;
var __43593 = (0);
while(true){
if((__43593 < n__39310__auto___43592)){
var G__43424_43594 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__43424_43594) {
case "compute":
var c__43031__auto___43596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__43593,c__43031__auto___43596,G__43424_43594,n__39310__auto___43592,jobs,results,process,async){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (__43593,c__43031__auto___43596,G__43424_43594,n__39310__auto___43592,jobs,results,process,async){
return (function (state_43437){
var state_val_43438 = (state_43437[(1)]);
if((state_val_43438 === (1))){
var state_43437__$1 = state_43437;
var statearr_43439_43597 = state_43437__$1;
(statearr_43439_43597[(2)] = null);

(statearr_43439_43597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43438 === (2))){
var state_43437__$1 = state_43437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43437__$1,(4),jobs);
} else {
if((state_val_43438 === (3))){
var inst_43435 = (state_43437[(2)]);
var state_43437__$1 = state_43437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43437__$1,inst_43435);
} else {
if((state_val_43438 === (4))){
var inst_43427 = (state_43437[(2)]);
var inst_43428 = process.call(null,inst_43427);
var state_43437__$1 = state_43437;
if(cljs.core.truth_(inst_43428)){
var statearr_43440_43598 = state_43437__$1;
(statearr_43440_43598[(1)] = (5));

} else {
var statearr_43441_43599 = state_43437__$1;
(statearr_43441_43599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43438 === (5))){
var state_43437__$1 = state_43437;
var statearr_43442_43600 = state_43437__$1;
(statearr_43442_43600[(2)] = null);

(statearr_43442_43600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43438 === (6))){
var state_43437__$1 = state_43437;
var statearr_43443_43601 = state_43437__$1;
(statearr_43443_43601[(2)] = null);

(statearr_43443_43601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43438 === (7))){
var inst_43433 = (state_43437[(2)]);
var state_43437__$1 = state_43437;
var statearr_43444_43602 = state_43437__$1;
(statearr_43444_43602[(2)] = inst_43433);

(statearr_43444_43602[(1)] = (3));


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
});})(__43593,c__43031__auto___43596,G__43424_43594,n__39310__auto___43592,jobs,results,process,async))
;
return ((function (__43593,switch__42919__auto__,c__43031__auto___43596,G__43424_43594,n__39310__auto___43592,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____0 = (function (){
var statearr_43448 = [null,null,null,null,null,null,null];
(statearr_43448[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__);

(statearr_43448[(1)] = (1));

return statearr_43448;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____1 = (function (state_43437){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_43437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e43449){if((e43449 instanceof Object)){
var ex__42923__auto__ = e43449;
var statearr_43450_43603 = state_43437;
(statearr_43450_43603[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43604 = state_43437;
state_43437 = G__43604;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__ = function(state_43437){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____1.call(this,state_43437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__;
})()
;})(__43593,switch__42919__auto__,c__43031__auto___43596,G__43424_43594,n__39310__auto___43592,jobs,results,process,async))
})();
var state__43033__auto__ = (function (){var statearr_43451 = f__43032__auto__.call(null);
(statearr_43451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto___43596);

return statearr_43451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(__43593,c__43031__auto___43596,G__43424_43594,n__39310__auto___43592,jobs,results,process,async))
);


break;
case "async":
var c__43031__auto___43605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__43593,c__43031__auto___43605,G__43424_43594,n__39310__auto___43592,jobs,results,process,async){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (__43593,c__43031__auto___43605,G__43424_43594,n__39310__auto___43592,jobs,results,process,async){
return (function (state_43464){
var state_val_43465 = (state_43464[(1)]);
if((state_val_43465 === (1))){
var state_43464__$1 = state_43464;
var statearr_43466_43606 = state_43464__$1;
(statearr_43466_43606[(2)] = null);

(statearr_43466_43606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43465 === (2))){
var state_43464__$1 = state_43464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43464__$1,(4),jobs);
} else {
if((state_val_43465 === (3))){
var inst_43462 = (state_43464[(2)]);
var state_43464__$1 = state_43464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43464__$1,inst_43462);
} else {
if((state_val_43465 === (4))){
var inst_43454 = (state_43464[(2)]);
var inst_43455 = async.call(null,inst_43454);
var state_43464__$1 = state_43464;
if(cljs.core.truth_(inst_43455)){
var statearr_43467_43607 = state_43464__$1;
(statearr_43467_43607[(1)] = (5));

} else {
var statearr_43468_43608 = state_43464__$1;
(statearr_43468_43608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43465 === (5))){
var state_43464__$1 = state_43464;
var statearr_43469_43609 = state_43464__$1;
(statearr_43469_43609[(2)] = null);

(statearr_43469_43609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43465 === (6))){
var state_43464__$1 = state_43464;
var statearr_43470_43610 = state_43464__$1;
(statearr_43470_43610[(2)] = null);

(statearr_43470_43610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43465 === (7))){
var inst_43460 = (state_43464[(2)]);
var state_43464__$1 = state_43464;
var statearr_43471_43611 = state_43464__$1;
(statearr_43471_43611[(2)] = inst_43460);

(statearr_43471_43611[(1)] = (3));


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
});})(__43593,c__43031__auto___43605,G__43424_43594,n__39310__auto___43592,jobs,results,process,async))
;
return ((function (__43593,switch__42919__auto__,c__43031__auto___43605,G__43424_43594,n__39310__auto___43592,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____0 = (function (){
var statearr_43475 = [null,null,null,null,null,null,null];
(statearr_43475[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__);

(statearr_43475[(1)] = (1));

return statearr_43475;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____1 = (function (state_43464){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_43464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e43476){if((e43476 instanceof Object)){
var ex__42923__auto__ = e43476;
var statearr_43477_43612 = state_43464;
(statearr_43477_43612[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43613 = state_43464;
state_43464 = G__43613;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__ = function(state_43464){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____1.call(this,state_43464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__;
})()
;})(__43593,switch__42919__auto__,c__43031__auto___43605,G__43424_43594,n__39310__auto___43592,jobs,results,process,async))
})();
var state__43033__auto__ = (function (){var statearr_43478 = f__43032__auto__.call(null);
(statearr_43478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto___43605);

return statearr_43478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(__43593,c__43031__auto___43605,G__43424_43594,n__39310__auto___43592,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__43614 = (__43593 + (1));
__43593 = G__43614;
continue;
} else {
}
break;
}

var c__43031__auto___43615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43031__auto___43615,jobs,results,process,async){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (c__43031__auto___43615,jobs,results,process,async){
return (function (state_43500){
var state_val_43501 = (state_43500[(1)]);
if((state_val_43501 === (1))){
var state_43500__$1 = state_43500;
var statearr_43502_43616 = state_43500__$1;
(statearr_43502_43616[(2)] = null);

(statearr_43502_43616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (2))){
var state_43500__$1 = state_43500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43500__$1,(4),from);
} else {
if((state_val_43501 === (3))){
var inst_43498 = (state_43500[(2)]);
var state_43500__$1 = state_43500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43500__$1,inst_43498);
} else {
if((state_val_43501 === (4))){
var inst_43481 = (state_43500[(7)]);
var inst_43481__$1 = (state_43500[(2)]);
var inst_43482 = (inst_43481__$1 == null);
var state_43500__$1 = (function (){var statearr_43503 = state_43500;
(statearr_43503[(7)] = inst_43481__$1);

return statearr_43503;
})();
if(cljs.core.truth_(inst_43482)){
var statearr_43504_43617 = state_43500__$1;
(statearr_43504_43617[(1)] = (5));

} else {
var statearr_43505_43618 = state_43500__$1;
(statearr_43505_43618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (5))){
var inst_43484 = cljs.core.async.close_BANG_.call(null,jobs);
var state_43500__$1 = state_43500;
var statearr_43506_43619 = state_43500__$1;
(statearr_43506_43619[(2)] = inst_43484);

(statearr_43506_43619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (6))){
var inst_43481 = (state_43500[(7)]);
var inst_43486 = (state_43500[(8)]);
var inst_43486__$1 = cljs.core.async.chan.call(null,(1));
var inst_43487 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43488 = [inst_43481,inst_43486__$1];
var inst_43489 = (new cljs.core.PersistentVector(null,2,(5),inst_43487,inst_43488,null));
var state_43500__$1 = (function (){var statearr_43507 = state_43500;
(statearr_43507[(8)] = inst_43486__$1);

return statearr_43507;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43500__$1,(8),jobs,inst_43489);
} else {
if((state_val_43501 === (7))){
var inst_43496 = (state_43500[(2)]);
var state_43500__$1 = state_43500;
var statearr_43508_43620 = state_43500__$1;
(statearr_43508_43620[(2)] = inst_43496);

(statearr_43508_43620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43501 === (8))){
var inst_43486 = (state_43500[(8)]);
var inst_43491 = (state_43500[(2)]);
var state_43500__$1 = (function (){var statearr_43509 = state_43500;
(statearr_43509[(9)] = inst_43491);

return statearr_43509;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43500__$1,(9),results,inst_43486);
} else {
if((state_val_43501 === (9))){
var inst_43493 = (state_43500[(2)]);
var state_43500__$1 = (function (){var statearr_43510 = state_43500;
(statearr_43510[(10)] = inst_43493);

return statearr_43510;
})();
var statearr_43511_43621 = state_43500__$1;
(statearr_43511_43621[(2)] = null);

(statearr_43511_43621[(1)] = (2));


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
});})(c__43031__auto___43615,jobs,results,process,async))
;
return ((function (switch__42919__auto__,c__43031__auto___43615,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____0 = (function (){
var statearr_43515 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43515[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__);

(statearr_43515[(1)] = (1));

return statearr_43515;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____1 = (function (state_43500){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_43500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e43516){if((e43516 instanceof Object)){
var ex__42923__auto__ = e43516;
var statearr_43517_43622 = state_43500;
(statearr_43517_43622[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43623 = state_43500;
state_43500 = G__43623;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__ = function(state_43500){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____1.call(this,state_43500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__;
})()
;})(switch__42919__auto__,c__43031__auto___43615,jobs,results,process,async))
})();
var state__43033__auto__ = (function (){var statearr_43518 = f__43032__auto__.call(null);
(statearr_43518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto___43615);

return statearr_43518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(c__43031__auto___43615,jobs,results,process,async))
);


var c__43031__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43031__auto__,jobs,results,process,async){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (c__43031__auto__,jobs,results,process,async){
return (function (state_43556){
var state_val_43557 = (state_43556[(1)]);
if((state_val_43557 === (7))){
var inst_43552 = (state_43556[(2)]);
var state_43556__$1 = state_43556;
var statearr_43558_43624 = state_43556__$1;
(statearr_43558_43624[(2)] = inst_43552);

(statearr_43558_43624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43557 === (20))){
var state_43556__$1 = state_43556;
var statearr_43559_43625 = state_43556__$1;
(statearr_43559_43625[(2)] = null);

(statearr_43559_43625[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43557 === (1))){
var state_43556__$1 = state_43556;
var statearr_43560_43626 = state_43556__$1;
(statearr_43560_43626[(2)] = null);

(statearr_43560_43626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43557 === (4))){
var inst_43521 = (state_43556[(7)]);
var inst_43521__$1 = (state_43556[(2)]);
var inst_43522 = (inst_43521__$1 == null);
var state_43556__$1 = (function (){var statearr_43561 = state_43556;
(statearr_43561[(7)] = inst_43521__$1);

return statearr_43561;
})();
if(cljs.core.truth_(inst_43522)){
var statearr_43562_43627 = state_43556__$1;
(statearr_43562_43627[(1)] = (5));

} else {
var statearr_43563_43628 = state_43556__$1;
(statearr_43563_43628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43557 === (15))){
var inst_43534 = (state_43556[(8)]);
var state_43556__$1 = state_43556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43556__$1,(18),to,inst_43534);
} else {
if((state_val_43557 === (21))){
var inst_43547 = (state_43556[(2)]);
var state_43556__$1 = state_43556;
var statearr_43564_43629 = state_43556__$1;
(statearr_43564_43629[(2)] = inst_43547);

(statearr_43564_43629[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43557 === (13))){
var inst_43549 = (state_43556[(2)]);
var state_43556__$1 = (function (){var statearr_43565 = state_43556;
(statearr_43565[(9)] = inst_43549);

return statearr_43565;
})();
var statearr_43566_43630 = state_43556__$1;
(statearr_43566_43630[(2)] = null);

(statearr_43566_43630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43557 === (6))){
var inst_43521 = (state_43556[(7)]);
var state_43556__$1 = state_43556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43556__$1,(11),inst_43521);
} else {
if((state_val_43557 === (17))){
var inst_43542 = (state_43556[(2)]);
var state_43556__$1 = state_43556;
if(cljs.core.truth_(inst_43542)){
var statearr_43567_43631 = state_43556__$1;
(statearr_43567_43631[(1)] = (19));

} else {
var statearr_43568_43632 = state_43556__$1;
(statearr_43568_43632[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43557 === (3))){
var inst_43554 = (state_43556[(2)]);
var state_43556__$1 = state_43556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43556__$1,inst_43554);
} else {
if((state_val_43557 === (12))){
var inst_43531 = (state_43556[(10)]);
var state_43556__$1 = state_43556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43556__$1,(14),inst_43531);
} else {
if((state_val_43557 === (2))){
var state_43556__$1 = state_43556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43556__$1,(4),results);
} else {
if((state_val_43557 === (19))){
var state_43556__$1 = state_43556;
var statearr_43569_43633 = state_43556__$1;
(statearr_43569_43633[(2)] = null);

(statearr_43569_43633[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43557 === (11))){
var inst_43531 = (state_43556[(2)]);
var state_43556__$1 = (function (){var statearr_43570 = state_43556;
(statearr_43570[(10)] = inst_43531);

return statearr_43570;
})();
var statearr_43571_43634 = state_43556__$1;
(statearr_43571_43634[(2)] = null);

(statearr_43571_43634[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43557 === (9))){
var state_43556__$1 = state_43556;
var statearr_43572_43635 = state_43556__$1;
(statearr_43572_43635[(2)] = null);

(statearr_43572_43635[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43557 === (5))){
var state_43556__$1 = state_43556;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43573_43636 = state_43556__$1;
(statearr_43573_43636[(1)] = (8));

} else {
var statearr_43574_43637 = state_43556__$1;
(statearr_43574_43637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43557 === (14))){
var inst_43536 = (state_43556[(11)]);
var inst_43534 = (state_43556[(8)]);
var inst_43534__$1 = (state_43556[(2)]);
var inst_43535 = (inst_43534__$1 == null);
var inst_43536__$1 = cljs.core.not.call(null,inst_43535);
var state_43556__$1 = (function (){var statearr_43575 = state_43556;
(statearr_43575[(11)] = inst_43536__$1);

(statearr_43575[(8)] = inst_43534__$1);

return statearr_43575;
})();
if(inst_43536__$1){
var statearr_43576_43638 = state_43556__$1;
(statearr_43576_43638[(1)] = (15));

} else {
var statearr_43577_43639 = state_43556__$1;
(statearr_43577_43639[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43557 === (16))){
var inst_43536 = (state_43556[(11)]);
var state_43556__$1 = state_43556;
var statearr_43578_43640 = state_43556__$1;
(statearr_43578_43640[(2)] = inst_43536);

(statearr_43578_43640[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43557 === (10))){
var inst_43528 = (state_43556[(2)]);
var state_43556__$1 = state_43556;
var statearr_43579_43641 = state_43556__$1;
(statearr_43579_43641[(2)] = inst_43528);

(statearr_43579_43641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43557 === (18))){
var inst_43539 = (state_43556[(2)]);
var state_43556__$1 = state_43556;
var statearr_43580_43642 = state_43556__$1;
(statearr_43580_43642[(2)] = inst_43539);

(statearr_43580_43642[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43557 === (8))){
var inst_43525 = cljs.core.async.close_BANG_.call(null,to);
var state_43556__$1 = state_43556;
var statearr_43581_43643 = state_43556__$1;
(statearr_43581_43643[(2)] = inst_43525);

(statearr_43581_43643[(1)] = (10));


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
});})(c__43031__auto__,jobs,results,process,async))
;
return ((function (switch__42919__auto__,c__43031__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____0 = (function (){
var statearr_43585 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43585[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__);

(statearr_43585[(1)] = (1));

return statearr_43585;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____1 = (function (state_43556){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_43556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e43586){if((e43586 instanceof Object)){
var ex__42923__auto__ = e43586;
var statearr_43587_43644 = state_43556;
(statearr_43587_43644[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43645 = state_43556;
state_43556 = G__43645;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__ = function(state_43556){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____1.call(this,state_43556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42920__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42920__auto__;
})()
;})(switch__42919__auto__,c__43031__auto__,jobs,results,process,async))
})();
var state__43033__auto__ = (function (){var statearr_43588 = f__43032__auto__.call(null);
(statearr_43588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto__);

return statearr_43588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(c__43031__auto__,jobs,results,process,async))
);

return c__43031__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args43646 = [];
var len__39470__auto___43649 = arguments.length;
var i__39471__auto___43650 = (0);
while(true){
if((i__39471__auto___43650 < len__39470__auto___43649)){
args43646.push((arguments[i__39471__auto___43650]));

var G__43651 = (i__39471__auto___43650 + (1));
i__39471__auto___43650 = G__43651;
continue;
} else {
}
break;
}

var G__43648 = args43646.length;
switch (G__43648) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43646.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args43653 = [];
var len__39470__auto___43656 = arguments.length;
var i__39471__auto___43657 = (0);
while(true){
if((i__39471__auto___43657 < len__39470__auto___43656)){
args43653.push((arguments[i__39471__auto___43657]));

var G__43658 = (i__39471__auto___43657 + (1));
i__39471__auto___43657 = G__43658;
continue;
} else {
}
break;
}

var G__43655 = args43653.length;
switch (G__43655) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43653.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args43660 = [];
var len__39470__auto___43713 = arguments.length;
var i__39471__auto___43714 = (0);
while(true){
if((i__39471__auto___43714 < len__39470__auto___43713)){
args43660.push((arguments[i__39471__auto___43714]));

var G__43715 = (i__39471__auto___43714 + (1));
i__39471__auto___43714 = G__43715;
continue;
} else {
}
break;
}

var G__43662 = args43660.length;
switch (G__43662) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43660.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__43031__auto___43717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43031__auto___43717,tc,fc){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (c__43031__auto___43717,tc,fc){
return (function (state_43688){
var state_val_43689 = (state_43688[(1)]);
if((state_val_43689 === (7))){
var inst_43684 = (state_43688[(2)]);
var state_43688__$1 = state_43688;
var statearr_43690_43718 = state_43688__$1;
(statearr_43690_43718[(2)] = inst_43684);

(statearr_43690_43718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43689 === (1))){
var state_43688__$1 = state_43688;
var statearr_43691_43719 = state_43688__$1;
(statearr_43691_43719[(2)] = null);

(statearr_43691_43719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43689 === (4))){
var inst_43665 = (state_43688[(7)]);
var inst_43665__$1 = (state_43688[(2)]);
var inst_43666 = (inst_43665__$1 == null);
var state_43688__$1 = (function (){var statearr_43692 = state_43688;
(statearr_43692[(7)] = inst_43665__$1);

return statearr_43692;
})();
if(cljs.core.truth_(inst_43666)){
var statearr_43693_43720 = state_43688__$1;
(statearr_43693_43720[(1)] = (5));

} else {
var statearr_43694_43721 = state_43688__$1;
(statearr_43694_43721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43689 === (13))){
var state_43688__$1 = state_43688;
var statearr_43695_43722 = state_43688__$1;
(statearr_43695_43722[(2)] = null);

(statearr_43695_43722[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43689 === (6))){
var inst_43665 = (state_43688[(7)]);
var inst_43671 = p.call(null,inst_43665);
var state_43688__$1 = state_43688;
if(cljs.core.truth_(inst_43671)){
var statearr_43696_43723 = state_43688__$1;
(statearr_43696_43723[(1)] = (9));

} else {
var statearr_43697_43724 = state_43688__$1;
(statearr_43697_43724[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43689 === (3))){
var inst_43686 = (state_43688[(2)]);
var state_43688__$1 = state_43688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43688__$1,inst_43686);
} else {
if((state_val_43689 === (12))){
var state_43688__$1 = state_43688;
var statearr_43698_43725 = state_43688__$1;
(statearr_43698_43725[(2)] = null);

(statearr_43698_43725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43689 === (2))){
var state_43688__$1 = state_43688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43688__$1,(4),ch);
} else {
if((state_val_43689 === (11))){
var inst_43665 = (state_43688[(7)]);
var inst_43675 = (state_43688[(2)]);
var state_43688__$1 = state_43688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43688__$1,(8),inst_43675,inst_43665);
} else {
if((state_val_43689 === (9))){
var state_43688__$1 = state_43688;
var statearr_43699_43726 = state_43688__$1;
(statearr_43699_43726[(2)] = tc);

(statearr_43699_43726[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43689 === (5))){
var inst_43668 = cljs.core.async.close_BANG_.call(null,tc);
var inst_43669 = cljs.core.async.close_BANG_.call(null,fc);
var state_43688__$1 = (function (){var statearr_43700 = state_43688;
(statearr_43700[(8)] = inst_43668);

return statearr_43700;
})();
var statearr_43701_43727 = state_43688__$1;
(statearr_43701_43727[(2)] = inst_43669);

(statearr_43701_43727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43689 === (14))){
var inst_43682 = (state_43688[(2)]);
var state_43688__$1 = state_43688;
var statearr_43702_43728 = state_43688__$1;
(statearr_43702_43728[(2)] = inst_43682);

(statearr_43702_43728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43689 === (10))){
var state_43688__$1 = state_43688;
var statearr_43703_43729 = state_43688__$1;
(statearr_43703_43729[(2)] = fc);

(statearr_43703_43729[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43689 === (8))){
var inst_43677 = (state_43688[(2)]);
var state_43688__$1 = state_43688;
if(cljs.core.truth_(inst_43677)){
var statearr_43704_43730 = state_43688__$1;
(statearr_43704_43730[(1)] = (12));

} else {
var statearr_43705_43731 = state_43688__$1;
(statearr_43705_43731[(1)] = (13));

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
});})(c__43031__auto___43717,tc,fc))
;
return ((function (switch__42919__auto__,c__43031__auto___43717,tc,fc){
return (function() {
var cljs$core$async$state_machine__42920__auto__ = null;
var cljs$core$async$state_machine__42920__auto____0 = (function (){
var statearr_43709 = [null,null,null,null,null,null,null,null,null];
(statearr_43709[(0)] = cljs$core$async$state_machine__42920__auto__);

(statearr_43709[(1)] = (1));

return statearr_43709;
});
var cljs$core$async$state_machine__42920__auto____1 = (function (state_43688){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_43688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e43710){if((e43710 instanceof Object)){
var ex__42923__auto__ = e43710;
var statearr_43711_43732 = state_43688;
(statearr_43711_43732[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43733 = state_43688;
state_43688 = G__43733;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
cljs$core$async$state_machine__42920__auto__ = function(state_43688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42920__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42920__auto____1.call(this,state_43688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42920__auto____0;
cljs$core$async$state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42920__auto____1;
return cljs$core$async$state_machine__42920__auto__;
})()
;})(switch__42919__auto__,c__43031__auto___43717,tc,fc))
})();
var state__43033__auto__ = (function (){var statearr_43712 = f__43032__auto__.call(null);
(statearr_43712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto___43717);

return statearr_43712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(c__43031__auto___43717,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__43031__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43031__auto__){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (c__43031__auto__){
return (function (state_43797){
var state_val_43798 = (state_43797[(1)]);
if((state_val_43798 === (7))){
var inst_43793 = (state_43797[(2)]);
var state_43797__$1 = state_43797;
var statearr_43799_43820 = state_43797__$1;
(statearr_43799_43820[(2)] = inst_43793);

(statearr_43799_43820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43798 === (1))){
var inst_43777 = init;
var state_43797__$1 = (function (){var statearr_43800 = state_43797;
(statearr_43800[(7)] = inst_43777);

return statearr_43800;
})();
var statearr_43801_43821 = state_43797__$1;
(statearr_43801_43821[(2)] = null);

(statearr_43801_43821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43798 === (4))){
var inst_43780 = (state_43797[(8)]);
var inst_43780__$1 = (state_43797[(2)]);
var inst_43781 = (inst_43780__$1 == null);
var state_43797__$1 = (function (){var statearr_43802 = state_43797;
(statearr_43802[(8)] = inst_43780__$1);

return statearr_43802;
})();
if(cljs.core.truth_(inst_43781)){
var statearr_43803_43822 = state_43797__$1;
(statearr_43803_43822[(1)] = (5));

} else {
var statearr_43804_43823 = state_43797__$1;
(statearr_43804_43823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43798 === (6))){
var inst_43784 = (state_43797[(9)]);
var inst_43777 = (state_43797[(7)]);
var inst_43780 = (state_43797[(8)]);
var inst_43784__$1 = f.call(null,inst_43777,inst_43780);
var inst_43785 = cljs.core.reduced_QMARK_.call(null,inst_43784__$1);
var state_43797__$1 = (function (){var statearr_43805 = state_43797;
(statearr_43805[(9)] = inst_43784__$1);

return statearr_43805;
})();
if(inst_43785){
var statearr_43806_43824 = state_43797__$1;
(statearr_43806_43824[(1)] = (8));

} else {
var statearr_43807_43825 = state_43797__$1;
(statearr_43807_43825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43798 === (3))){
var inst_43795 = (state_43797[(2)]);
var state_43797__$1 = state_43797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43797__$1,inst_43795);
} else {
if((state_val_43798 === (2))){
var state_43797__$1 = state_43797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43797__$1,(4),ch);
} else {
if((state_val_43798 === (9))){
var inst_43784 = (state_43797[(9)]);
var inst_43777 = inst_43784;
var state_43797__$1 = (function (){var statearr_43808 = state_43797;
(statearr_43808[(7)] = inst_43777);

return statearr_43808;
})();
var statearr_43809_43826 = state_43797__$1;
(statearr_43809_43826[(2)] = null);

(statearr_43809_43826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43798 === (5))){
var inst_43777 = (state_43797[(7)]);
var state_43797__$1 = state_43797;
var statearr_43810_43827 = state_43797__$1;
(statearr_43810_43827[(2)] = inst_43777);

(statearr_43810_43827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43798 === (10))){
var inst_43791 = (state_43797[(2)]);
var state_43797__$1 = state_43797;
var statearr_43811_43828 = state_43797__$1;
(statearr_43811_43828[(2)] = inst_43791);

(statearr_43811_43828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43798 === (8))){
var inst_43784 = (state_43797[(9)]);
var inst_43787 = cljs.core.deref.call(null,inst_43784);
var state_43797__$1 = state_43797;
var statearr_43812_43829 = state_43797__$1;
(statearr_43812_43829[(2)] = inst_43787);

(statearr_43812_43829[(1)] = (10));


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
});})(c__43031__auto__))
;
return ((function (switch__42919__auto__,c__43031__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__42920__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42920__auto____0 = (function (){
var statearr_43816 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43816[(0)] = cljs$core$async$reduce_$_state_machine__42920__auto__);

(statearr_43816[(1)] = (1));

return statearr_43816;
});
var cljs$core$async$reduce_$_state_machine__42920__auto____1 = (function (state_43797){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_43797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e43817){if((e43817 instanceof Object)){
var ex__42923__auto__ = e43817;
var statearr_43818_43830 = state_43797;
(statearr_43818_43830[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43831 = state_43797;
state_43797 = G__43831;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42920__auto__ = function(state_43797){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42920__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42920__auto____1.call(this,state_43797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42920__auto____0;
cljs$core$async$reduce_$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42920__auto____1;
return cljs$core$async$reduce_$_state_machine__42920__auto__;
})()
;})(switch__42919__auto__,c__43031__auto__))
})();
var state__43033__auto__ = (function (){var statearr_43819 = f__43032__auto__.call(null);
(statearr_43819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto__);

return statearr_43819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(c__43031__auto__))
);

return c__43031__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args43832 = [];
var len__39470__auto___43884 = arguments.length;
var i__39471__auto___43885 = (0);
while(true){
if((i__39471__auto___43885 < len__39470__auto___43884)){
args43832.push((arguments[i__39471__auto___43885]));

var G__43886 = (i__39471__auto___43885 + (1));
i__39471__auto___43885 = G__43886;
continue;
} else {
}
break;
}

var G__43834 = args43832.length;
switch (G__43834) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43832.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__43031__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43031__auto__){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (c__43031__auto__){
return (function (state_43859){
var state_val_43860 = (state_43859[(1)]);
if((state_val_43860 === (7))){
var inst_43841 = (state_43859[(2)]);
var state_43859__$1 = state_43859;
var statearr_43861_43888 = state_43859__$1;
(statearr_43861_43888[(2)] = inst_43841);

(statearr_43861_43888[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43860 === (1))){
var inst_43835 = cljs.core.seq.call(null,coll);
var inst_43836 = inst_43835;
var state_43859__$1 = (function (){var statearr_43862 = state_43859;
(statearr_43862[(7)] = inst_43836);

return statearr_43862;
})();
var statearr_43863_43889 = state_43859__$1;
(statearr_43863_43889[(2)] = null);

(statearr_43863_43889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43860 === (4))){
var inst_43836 = (state_43859[(7)]);
var inst_43839 = cljs.core.first.call(null,inst_43836);
var state_43859__$1 = state_43859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43859__$1,(7),ch,inst_43839);
} else {
if((state_val_43860 === (13))){
var inst_43853 = (state_43859[(2)]);
var state_43859__$1 = state_43859;
var statearr_43864_43890 = state_43859__$1;
(statearr_43864_43890[(2)] = inst_43853);

(statearr_43864_43890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43860 === (6))){
var inst_43844 = (state_43859[(2)]);
var state_43859__$1 = state_43859;
if(cljs.core.truth_(inst_43844)){
var statearr_43865_43891 = state_43859__$1;
(statearr_43865_43891[(1)] = (8));

} else {
var statearr_43866_43892 = state_43859__$1;
(statearr_43866_43892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43860 === (3))){
var inst_43857 = (state_43859[(2)]);
var state_43859__$1 = state_43859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43859__$1,inst_43857);
} else {
if((state_val_43860 === (12))){
var state_43859__$1 = state_43859;
var statearr_43867_43893 = state_43859__$1;
(statearr_43867_43893[(2)] = null);

(statearr_43867_43893[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43860 === (2))){
var inst_43836 = (state_43859[(7)]);
var state_43859__$1 = state_43859;
if(cljs.core.truth_(inst_43836)){
var statearr_43868_43894 = state_43859__$1;
(statearr_43868_43894[(1)] = (4));

} else {
var statearr_43869_43895 = state_43859__$1;
(statearr_43869_43895[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43860 === (11))){
var inst_43850 = cljs.core.async.close_BANG_.call(null,ch);
var state_43859__$1 = state_43859;
var statearr_43870_43896 = state_43859__$1;
(statearr_43870_43896[(2)] = inst_43850);

(statearr_43870_43896[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43860 === (9))){
var state_43859__$1 = state_43859;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43871_43897 = state_43859__$1;
(statearr_43871_43897[(1)] = (11));

} else {
var statearr_43872_43898 = state_43859__$1;
(statearr_43872_43898[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43860 === (5))){
var inst_43836 = (state_43859[(7)]);
var state_43859__$1 = state_43859;
var statearr_43873_43899 = state_43859__$1;
(statearr_43873_43899[(2)] = inst_43836);

(statearr_43873_43899[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43860 === (10))){
var inst_43855 = (state_43859[(2)]);
var state_43859__$1 = state_43859;
var statearr_43874_43900 = state_43859__$1;
(statearr_43874_43900[(2)] = inst_43855);

(statearr_43874_43900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43860 === (8))){
var inst_43836 = (state_43859[(7)]);
var inst_43846 = cljs.core.next.call(null,inst_43836);
var inst_43836__$1 = inst_43846;
var state_43859__$1 = (function (){var statearr_43875 = state_43859;
(statearr_43875[(7)] = inst_43836__$1);

return statearr_43875;
})();
var statearr_43876_43901 = state_43859__$1;
(statearr_43876_43901[(2)] = null);

(statearr_43876_43901[(1)] = (2));


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
});})(c__43031__auto__))
;
return ((function (switch__42919__auto__,c__43031__auto__){
return (function() {
var cljs$core$async$state_machine__42920__auto__ = null;
var cljs$core$async$state_machine__42920__auto____0 = (function (){
var statearr_43880 = [null,null,null,null,null,null,null,null];
(statearr_43880[(0)] = cljs$core$async$state_machine__42920__auto__);

(statearr_43880[(1)] = (1));

return statearr_43880;
});
var cljs$core$async$state_machine__42920__auto____1 = (function (state_43859){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_43859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e43881){if((e43881 instanceof Object)){
var ex__42923__auto__ = e43881;
var statearr_43882_43902 = state_43859;
(statearr_43882_43902[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43903 = state_43859;
state_43859 = G__43903;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
cljs$core$async$state_machine__42920__auto__ = function(state_43859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42920__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42920__auto____1.call(this,state_43859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42920__auto____0;
cljs$core$async$state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42920__auto____1;
return cljs$core$async$state_machine__42920__auto__;
})()
;})(switch__42919__auto__,c__43031__auto__))
})();
var state__43033__auto__ = (function (){var statearr_43883 = f__43032__auto__.call(null);
(statearr_43883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto__);

return statearr_43883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(c__43031__auto__))
);

return c__43031__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__39058__auto__ = (((_ == null))?null:_);
var m__39059__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,_);
} else {
var m__39059__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__39058__auto__ = (((m == null))?null:m);
var m__39059__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__39059__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__39058__auto__ = (((m == null))?null:m);
var m__39059__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,m,ch);
} else {
var m__39059__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__39058__auto__ = (((m == null))?null:m);
var m__39059__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,m);
} else {
var m__39059__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async44129 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44129 = (function (mult,ch,cs,meta44130){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta44130 = meta44130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_44131,meta44130__$1){
var self__ = this;
var _44131__$1 = this;
return (new cljs.core.async.t_cljs$core$async44129(self__.mult,self__.ch,self__.cs,meta44130__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async44129.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_44131){
var self__ = this;
var _44131__$1 = this;
return self__.meta44130;
});})(cs))
;

cljs.core.async.t_cljs$core$async44129.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async44129.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async44129.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async44129.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44129.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44129.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44129.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44130","meta44130",-1348373602,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async44129.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44129";

cljs.core.async.t_cljs$core$async44129.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__39001__auto__,writer__39002__auto__,opt__39003__auto__){
return cljs.core._write.call(null,writer__39002__auto__,"cljs.core.async/t_cljs$core$async44129");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async44129 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async44129(mult__$1,ch__$1,cs__$1,meta44130){
return (new cljs.core.async.t_cljs$core$async44129(mult__$1,ch__$1,cs__$1,meta44130));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async44129(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__43031__auto___44354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43031__auto___44354,cs,m,dchan,dctr,done){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (c__43031__auto___44354,cs,m,dchan,dctr,done){
return (function (state_44266){
var state_val_44267 = (state_44266[(1)]);
if((state_val_44267 === (7))){
var inst_44262 = (state_44266[(2)]);
var state_44266__$1 = state_44266;
var statearr_44268_44355 = state_44266__$1;
(statearr_44268_44355[(2)] = inst_44262);

(statearr_44268_44355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (20))){
var inst_44165 = (state_44266[(7)]);
var inst_44177 = cljs.core.first.call(null,inst_44165);
var inst_44178 = cljs.core.nth.call(null,inst_44177,(0),null);
var inst_44179 = cljs.core.nth.call(null,inst_44177,(1),null);
var state_44266__$1 = (function (){var statearr_44269 = state_44266;
(statearr_44269[(8)] = inst_44178);

return statearr_44269;
})();
if(cljs.core.truth_(inst_44179)){
var statearr_44270_44356 = state_44266__$1;
(statearr_44270_44356[(1)] = (22));

} else {
var statearr_44271_44357 = state_44266__$1;
(statearr_44271_44357[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (27))){
var inst_44207 = (state_44266[(9)]);
var inst_44134 = (state_44266[(10)]);
var inst_44214 = (state_44266[(11)]);
var inst_44209 = (state_44266[(12)]);
var inst_44214__$1 = cljs.core._nth.call(null,inst_44207,inst_44209);
var inst_44215 = cljs.core.async.put_BANG_.call(null,inst_44214__$1,inst_44134,done);
var state_44266__$1 = (function (){var statearr_44272 = state_44266;
(statearr_44272[(11)] = inst_44214__$1);

return statearr_44272;
})();
if(cljs.core.truth_(inst_44215)){
var statearr_44273_44358 = state_44266__$1;
(statearr_44273_44358[(1)] = (30));

} else {
var statearr_44274_44359 = state_44266__$1;
(statearr_44274_44359[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (1))){
var state_44266__$1 = state_44266;
var statearr_44275_44360 = state_44266__$1;
(statearr_44275_44360[(2)] = null);

(statearr_44275_44360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (24))){
var inst_44165 = (state_44266[(7)]);
var inst_44184 = (state_44266[(2)]);
var inst_44185 = cljs.core.next.call(null,inst_44165);
var inst_44143 = inst_44185;
var inst_44144 = null;
var inst_44145 = (0);
var inst_44146 = (0);
var state_44266__$1 = (function (){var statearr_44276 = state_44266;
(statearr_44276[(13)] = inst_44146);

(statearr_44276[(14)] = inst_44143);

(statearr_44276[(15)] = inst_44144);

(statearr_44276[(16)] = inst_44184);

(statearr_44276[(17)] = inst_44145);

return statearr_44276;
})();
var statearr_44277_44361 = state_44266__$1;
(statearr_44277_44361[(2)] = null);

(statearr_44277_44361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (39))){
var state_44266__$1 = state_44266;
var statearr_44281_44362 = state_44266__$1;
(statearr_44281_44362[(2)] = null);

(statearr_44281_44362[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (4))){
var inst_44134 = (state_44266[(10)]);
var inst_44134__$1 = (state_44266[(2)]);
var inst_44135 = (inst_44134__$1 == null);
var state_44266__$1 = (function (){var statearr_44282 = state_44266;
(statearr_44282[(10)] = inst_44134__$1);

return statearr_44282;
})();
if(cljs.core.truth_(inst_44135)){
var statearr_44283_44363 = state_44266__$1;
(statearr_44283_44363[(1)] = (5));

} else {
var statearr_44284_44364 = state_44266__$1;
(statearr_44284_44364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (15))){
var inst_44146 = (state_44266[(13)]);
var inst_44143 = (state_44266[(14)]);
var inst_44144 = (state_44266[(15)]);
var inst_44145 = (state_44266[(17)]);
var inst_44161 = (state_44266[(2)]);
var inst_44162 = (inst_44146 + (1));
var tmp44278 = inst_44143;
var tmp44279 = inst_44144;
var tmp44280 = inst_44145;
var inst_44143__$1 = tmp44278;
var inst_44144__$1 = tmp44279;
var inst_44145__$1 = tmp44280;
var inst_44146__$1 = inst_44162;
var state_44266__$1 = (function (){var statearr_44285 = state_44266;
(statearr_44285[(13)] = inst_44146__$1);

(statearr_44285[(14)] = inst_44143__$1);

(statearr_44285[(15)] = inst_44144__$1);

(statearr_44285[(18)] = inst_44161);

(statearr_44285[(17)] = inst_44145__$1);

return statearr_44285;
})();
var statearr_44286_44365 = state_44266__$1;
(statearr_44286_44365[(2)] = null);

(statearr_44286_44365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (21))){
var inst_44188 = (state_44266[(2)]);
var state_44266__$1 = state_44266;
var statearr_44290_44366 = state_44266__$1;
(statearr_44290_44366[(2)] = inst_44188);

(statearr_44290_44366[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (31))){
var inst_44214 = (state_44266[(11)]);
var inst_44218 = done.call(null,null);
var inst_44219 = cljs.core.async.untap_STAR_.call(null,m,inst_44214);
var state_44266__$1 = (function (){var statearr_44291 = state_44266;
(statearr_44291[(19)] = inst_44218);

return statearr_44291;
})();
var statearr_44292_44367 = state_44266__$1;
(statearr_44292_44367[(2)] = inst_44219);

(statearr_44292_44367[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (32))){
var inst_44207 = (state_44266[(9)]);
var inst_44208 = (state_44266[(20)]);
var inst_44209 = (state_44266[(12)]);
var inst_44206 = (state_44266[(21)]);
var inst_44221 = (state_44266[(2)]);
var inst_44222 = (inst_44209 + (1));
var tmp44287 = inst_44207;
var tmp44288 = inst_44208;
var tmp44289 = inst_44206;
var inst_44206__$1 = tmp44289;
var inst_44207__$1 = tmp44287;
var inst_44208__$1 = tmp44288;
var inst_44209__$1 = inst_44222;
var state_44266__$1 = (function (){var statearr_44293 = state_44266;
(statearr_44293[(9)] = inst_44207__$1);

(statearr_44293[(20)] = inst_44208__$1);

(statearr_44293[(22)] = inst_44221);

(statearr_44293[(12)] = inst_44209__$1);

(statearr_44293[(21)] = inst_44206__$1);

return statearr_44293;
})();
var statearr_44294_44368 = state_44266__$1;
(statearr_44294_44368[(2)] = null);

(statearr_44294_44368[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (40))){
var inst_44234 = (state_44266[(23)]);
var inst_44238 = done.call(null,null);
var inst_44239 = cljs.core.async.untap_STAR_.call(null,m,inst_44234);
var state_44266__$1 = (function (){var statearr_44295 = state_44266;
(statearr_44295[(24)] = inst_44238);

return statearr_44295;
})();
var statearr_44296_44369 = state_44266__$1;
(statearr_44296_44369[(2)] = inst_44239);

(statearr_44296_44369[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (33))){
var inst_44225 = (state_44266[(25)]);
var inst_44227 = cljs.core.chunked_seq_QMARK_.call(null,inst_44225);
var state_44266__$1 = state_44266;
if(inst_44227){
var statearr_44297_44370 = state_44266__$1;
(statearr_44297_44370[(1)] = (36));

} else {
var statearr_44298_44371 = state_44266__$1;
(statearr_44298_44371[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (13))){
var inst_44155 = (state_44266[(26)]);
var inst_44158 = cljs.core.async.close_BANG_.call(null,inst_44155);
var state_44266__$1 = state_44266;
var statearr_44299_44372 = state_44266__$1;
(statearr_44299_44372[(2)] = inst_44158);

(statearr_44299_44372[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (22))){
var inst_44178 = (state_44266[(8)]);
var inst_44181 = cljs.core.async.close_BANG_.call(null,inst_44178);
var state_44266__$1 = state_44266;
var statearr_44300_44373 = state_44266__$1;
(statearr_44300_44373[(2)] = inst_44181);

(statearr_44300_44373[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (36))){
var inst_44225 = (state_44266[(25)]);
var inst_44229 = cljs.core.chunk_first.call(null,inst_44225);
var inst_44230 = cljs.core.chunk_rest.call(null,inst_44225);
var inst_44231 = cljs.core.count.call(null,inst_44229);
var inst_44206 = inst_44230;
var inst_44207 = inst_44229;
var inst_44208 = inst_44231;
var inst_44209 = (0);
var state_44266__$1 = (function (){var statearr_44301 = state_44266;
(statearr_44301[(9)] = inst_44207);

(statearr_44301[(20)] = inst_44208);

(statearr_44301[(12)] = inst_44209);

(statearr_44301[(21)] = inst_44206);

return statearr_44301;
})();
var statearr_44302_44374 = state_44266__$1;
(statearr_44302_44374[(2)] = null);

(statearr_44302_44374[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (41))){
var inst_44225 = (state_44266[(25)]);
var inst_44241 = (state_44266[(2)]);
var inst_44242 = cljs.core.next.call(null,inst_44225);
var inst_44206 = inst_44242;
var inst_44207 = null;
var inst_44208 = (0);
var inst_44209 = (0);
var state_44266__$1 = (function (){var statearr_44303 = state_44266;
(statearr_44303[(9)] = inst_44207);

(statearr_44303[(20)] = inst_44208);

(statearr_44303[(27)] = inst_44241);

(statearr_44303[(12)] = inst_44209);

(statearr_44303[(21)] = inst_44206);

return statearr_44303;
})();
var statearr_44304_44375 = state_44266__$1;
(statearr_44304_44375[(2)] = null);

(statearr_44304_44375[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (43))){
var state_44266__$1 = state_44266;
var statearr_44305_44376 = state_44266__$1;
(statearr_44305_44376[(2)] = null);

(statearr_44305_44376[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (29))){
var inst_44250 = (state_44266[(2)]);
var state_44266__$1 = state_44266;
var statearr_44306_44377 = state_44266__$1;
(statearr_44306_44377[(2)] = inst_44250);

(statearr_44306_44377[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (44))){
var inst_44259 = (state_44266[(2)]);
var state_44266__$1 = (function (){var statearr_44307 = state_44266;
(statearr_44307[(28)] = inst_44259);

return statearr_44307;
})();
var statearr_44308_44378 = state_44266__$1;
(statearr_44308_44378[(2)] = null);

(statearr_44308_44378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (6))){
var inst_44198 = (state_44266[(29)]);
var inst_44197 = cljs.core.deref.call(null,cs);
var inst_44198__$1 = cljs.core.keys.call(null,inst_44197);
var inst_44199 = cljs.core.count.call(null,inst_44198__$1);
var inst_44200 = cljs.core.reset_BANG_.call(null,dctr,inst_44199);
var inst_44205 = cljs.core.seq.call(null,inst_44198__$1);
var inst_44206 = inst_44205;
var inst_44207 = null;
var inst_44208 = (0);
var inst_44209 = (0);
var state_44266__$1 = (function (){var statearr_44309 = state_44266;
(statearr_44309[(9)] = inst_44207);

(statearr_44309[(20)] = inst_44208);

(statearr_44309[(29)] = inst_44198__$1);

(statearr_44309[(30)] = inst_44200);

(statearr_44309[(12)] = inst_44209);

(statearr_44309[(21)] = inst_44206);

return statearr_44309;
})();
var statearr_44310_44379 = state_44266__$1;
(statearr_44310_44379[(2)] = null);

(statearr_44310_44379[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (28))){
var inst_44225 = (state_44266[(25)]);
var inst_44206 = (state_44266[(21)]);
var inst_44225__$1 = cljs.core.seq.call(null,inst_44206);
var state_44266__$1 = (function (){var statearr_44311 = state_44266;
(statearr_44311[(25)] = inst_44225__$1);

return statearr_44311;
})();
if(inst_44225__$1){
var statearr_44312_44380 = state_44266__$1;
(statearr_44312_44380[(1)] = (33));

} else {
var statearr_44313_44381 = state_44266__$1;
(statearr_44313_44381[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (25))){
var inst_44208 = (state_44266[(20)]);
var inst_44209 = (state_44266[(12)]);
var inst_44211 = (inst_44209 < inst_44208);
var inst_44212 = inst_44211;
var state_44266__$1 = state_44266;
if(cljs.core.truth_(inst_44212)){
var statearr_44314_44382 = state_44266__$1;
(statearr_44314_44382[(1)] = (27));

} else {
var statearr_44315_44383 = state_44266__$1;
(statearr_44315_44383[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (34))){
var state_44266__$1 = state_44266;
var statearr_44316_44384 = state_44266__$1;
(statearr_44316_44384[(2)] = null);

(statearr_44316_44384[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (17))){
var state_44266__$1 = state_44266;
var statearr_44317_44385 = state_44266__$1;
(statearr_44317_44385[(2)] = null);

(statearr_44317_44385[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (3))){
var inst_44264 = (state_44266[(2)]);
var state_44266__$1 = state_44266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44266__$1,inst_44264);
} else {
if((state_val_44267 === (12))){
var inst_44193 = (state_44266[(2)]);
var state_44266__$1 = state_44266;
var statearr_44318_44386 = state_44266__$1;
(statearr_44318_44386[(2)] = inst_44193);

(statearr_44318_44386[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (2))){
var state_44266__$1 = state_44266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44266__$1,(4),ch);
} else {
if((state_val_44267 === (23))){
var state_44266__$1 = state_44266;
var statearr_44319_44387 = state_44266__$1;
(statearr_44319_44387[(2)] = null);

(statearr_44319_44387[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (35))){
var inst_44248 = (state_44266[(2)]);
var state_44266__$1 = state_44266;
var statearr_44320_44388 = state_44266__$1;
(statearr_44320_44388[(2)] = inst_44248);

(statearr_44320_44388[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (19))){
var inst_44165 = (state_44266[(7)]);
var inst_44169 = cljs.core.chunk_first.call(null,inst_44165);
var inst_44170 = cljs.core.chunk_rest.call(null,inst_44165);
var inst_44171 = cljs.core.count.call(null,inst_44169);
var inst_44143 = inst_44170;
var inst_44144 = inst_44169;
var inst_44145 = inst_44171;
var inst_44146 = (0);
var state_44266__$1 = (function (){var statearr_44321 = state_44266;
(statearr_44321[(13)] = inst_44146);

(statearr_44321[(14)] = inst_44143);

(statearr_44321[(15)] = inst_44144);

(statearr_44321[(17)] = inst_44145);

return statearr_44321;
})();
var statearr_44322_44389 = state_44266__$1;
(statearr_44322_44389[(2)] = null);

(statearr_44322_44389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (11))){
var inst_44143 = (state_44266[(14)]);
var inst_44165 = (state_44266[(7)]);
var inst_44165__$1 = cljs.core.seq.call(null,inst_44143);
var state_44266__$1 = (function (){var statearr_44323 = state_44266;
(statearr_44323[(7)] = inst_44165__$1);

return statearr_44323;
})();
if(inst_44165__$1){
var statearr_44324_44390 = state_44266__$1;
(statearr_44324_44390[(1)] = (16));

} else {
var statearr_44325_44391 = state_44266__$1;
(statearr_44325_44391[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (9))){
var inst_44195 = (state_44266[(2)]);
var state_44266__$1 = state_44266;
var statearr_44326_44392 = state_44266__$1;
(statearr_44326_44392[(2)] = inst_44195);

(statearr_44326_44392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (5))){
var inst_44141 = cljs.core.deref.call(null,cs);
var inst_44142 = cljs.core.seq.call(null,inst_44141);
var inst_44143 = inst_44142;
var inst_44144 = null;
var inst_44145 = (0);
var inst_44146 = (0);
var state_44266__$1 = (function (){var statearr_44327 = state_44266;
(statearr_44327[(13)] = inst_44146);

(statearr_44327[(14)] = inst_44143);

(statearr_44327[(15)] = inst_44144);

(statearr_44327[(17)] = inst_44145);

return statearr_44327;
})();
var statearr_44328_44393 = state_44266__$1;
(statearr_44328_44393[(2)] = null);

(statearr_44328_44393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (14))){
var state_44266__$1 = state_44266;
var statearr_44329_44394 = state_44266__$1;
(statearr_44329_44394[(2)] = null);

(statearr_44329_44394[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (45))){
var inst_44256 = (state_44266[(2)]);
var state_44266__$1 = state_44266;
var statearr_44330_44395 = state_44266__$1;
(statearr_44330_44395[(2)] = inst_44256);

(statearr_44330_44395[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (26))){
var inst_44198 = (state_44266[(29)]);
var inst_44252 = (state_44266[(2)]);
var inst_44253 = cljs.core.seq.call(null,inst_44198);
var state_44266__$1 = (function (){var statearr_44331 = state_44266;
(statearr_44331[(31)] = inst_44252);

return statearr_44331;
})();
if(inst_44253){
var statearr_44332_44396 = state_44266__$1;
(statearr_44332_44396[(1)] = (42));

} else {
var statearr_44333_44397 = state_44266__$1;
(statearr_44333_44397[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (16))){
var inst_44165 = (state_44266[(7)]);
var inst_44167 = cljs.core.chunked_seq_QMARK_.call(null,inst_44165);
var state_44266__$1 = state_44266;
if(inst_44167){
var statearr_44334_44398 = state_44266__$1;
(statearr_44334_44398[(1)] = (19));

} else {
var statearr_44335_44399 = state_44266__$1;
(statearr_44335_44399[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (38))){
var inst_44245 = (state_44266[(2)]);
var state_44266__$1 = state_44266;
var statearr_44336_44400 = state_44266__$1;
(statearr_44336_44400[(2)] = inst_44245);

(statearr_44336_44400[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (30))){
var state_44266__$1 = state_44266;
var statearr_44337_44401 = state_44266__$1;
(statearr_44337_44401[(2)] = null);

(statearr_44337_44401[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (10))){
var inst_44146 = (state_44266[(13)]);
var inst_44144 = (state_44266[(15)]);
var inst_44154 = cljs.core._nth.call(null,inst_44144,inst_44146);
var inst_44155 = cljs.core.nth.call(null,inst_44154,(0),null);
var inst_44156 = cljs.core.nth.call(null,inst_44154,(1),null);
var state_44266__$1 = (function (){var statearr_44338 = state_44266;
(statearr_44338[(26)] = inst_44155);

return statearr_44338;
})();
if(cljs.core.truth_(inst_44156)){
var statearr_44339_44402 = state_44266__$1;
(statearr_44339_44402[(1)] = (13));

} else {
var statearr_44340_44403 = state_44266__$1;
(statearr_44340_44403[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (18))){
var inst_44191 = (state_44266[(2)]);
var state_44266__$1 = state_44266;
var statearr_44341_44404 = state_44266__$1;
(statearr_44341_44404[(2)] = inst_44191);

(statearr_44341_44404[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (42))){
var state_44266__$1 = state_44266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44266__$1,(45),dchan);
} else {
if((state_val_44267 === (37))){
var inst_44134 = (state_44266[(10)]);
var inst_44225 = (state_44266[(25)]);
var inst_44234 = (state_44266[(23)]);
var inst_44234__$1 = cljs.core.first.call(null,inst_44225);
var inst_44235 = cljs.core.async.put_BANG_.call(null,inst_44234__$1,inst_44134,done);
var state_44266__$1 = (function (){var statearr_44342 = state_44266;
(statearr_44342[(23)] = inst_44234__$1);

return statearr_44342;
})();
if(cljs.core.truth_(inst_44235)){
var statearr_44343_44405 = state_44266__$1;
(statearr_44343_44405[(1)] = (39));

} else {
var statearr_44344_44406 = state_44266__$1;
(statearr_44344_44406[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44267 === (8))){
var inst_44146 = (state_44266[(13)]);
var inst_44145 = (state_44266[(17)]);
var inst_44148 = (inst_44146 < inst_44145);
var inst_44149 = inst_44148;
var state_44266__$1 = state_44266;
if(cljs.core.truth_(inst_44149)){
var statearr_44345_44407 = state_44266__$1;
(statearr_44345_44407[(1)] = (10));

} else {
var statearr_44346_44408 = state_44266__$1;
(statearr_44346_44408[(1)] = (11));

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
});})(c__43031__auto___44354,cs,m,dchan,dctr,done))
;
return ((function (switch__42919__auto__,c__43031__auto___44354,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__42920__auto__ = null;
var cljs$core$async$mult_$_state_machine__42920__auto____0 = (function (){
var statearr_44350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44350[(0)] = cljs$core$async$mult_$_state_machine__42920__auto__);

(statearr_44350[(1)] = (1));

return statearr_44350;
});
var cljs$core$async$mult_$_state_machine__42920__auto____1 = (function (state_44266){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_44266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e44351){if((e44351 instanceof Object)){
var ex__42923__auto__ = e44351;
var statearr_44352_44409 = state_44266;
(statearr_44352_44409[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44410 = state_44266;
state_44266 = G__44410;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42920__auto__ = function(state_44266){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42920__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42920__auto____1.call(this,state_44266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42920__auto____0;
cljs$core$async$mult_$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42920__auto____1;
return cljs$core$async$mult_$_state_machine__42920__auto__;
})()
;})(switch__42919__auto__,c__43031__auto___44354,cs,m,dchan,dctr,done))
})();
var state__43033__auto__ = (function (){var statearr_44353 = f__43032__auto__.call(null);
(statearr_44353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto___44354);

return statearr_44353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(c__43031__auto___44354,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args44411 = [];
var len__39470__auto___44414 = arguments.length;
var i__39471__auto___44415 = (0);
while(true){
if((i__39471__auto___44415 < len__39470__auto___44414)){
args44411.push((arguments[i__39471__auto___44415]));

var G__44416 = (i__39471__auto___44415 + (1));
i__39471__auto___44415 = G__44416;
continue;
} else {
}
break;
}

var G__44413 = args44411.length;
switch (G__44413) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44411.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__39058__auto__ = (((m == null))?null:m);
var m__39059__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,m,ch);
} else {
var m__39059__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__39058__auto__ = (((m == null))?null:m);
var m__39059__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,m,ch);
} else {
var m__39059__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__39058__auto__ = (((m == null))?null:m);
var m__39059__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,m);
} else {
var m__39059__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__39058__auto__ = (((m == null))?null:m);
var m__39059__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,m,state_map);
} else {
var m__39059__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__39058__auto__ = (((m == null))?null:m);
var m__39059__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,m,mode);
} else {
var m__39059__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__39477__auto__ = [];
var len__39470__auto___44428 = arguments.length;
var i__39471__auto___44429 = (0);
while(true){
if((i__39471__auto___44429 < len__39470__auto___44428)){
args__39477__auto__.push((arguments[i__39471__auto___44429]));

var G__44430 = (i__39471__auto___44429 + (1));
i__39471__auto___44429 = G__44430;
continue;
} else {
}
break;
}

var argseq__39478__auto__ = ((((3) < args__39477__auto__.length))?(new cljs.core.IndexedSeq(args__39477__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__39478__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44422){
var map__44423 = p__44422;
var map__44423__$1 = ((((!((map__44423 == null)))?((((map__44423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44423):map__44423);
var opts = map__44423__$1;
var statearr_44425_44431 = state;
(statearr_44425_44431[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__44423,map__44423__$1,opts){
return (function (val){
var statearr_44426_44432 = state;
(statearr_44426_44432[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__44423,map__44423__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_44427_44433 = state;
(statearr_44427_44433[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44418){
var G__44419 = cljs.core.first.call(null,seq44418);
var seq44418__$1 = cljs.core.next.call(null,seq44418);
var G__44420 = cljs.core.first.call(null,seq44418__$1);
var seq44418__$2 = cljs.core.next.call(null,seq44418__$1);
var G__44421 = cljs.core.first.call(null,seq44418__$2);
var seq44418__$3 = cljs.core.next.call(null,seq44418__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44419,G__44420,G__44421,seq44418__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async44599 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44599 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44600){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta44600 = meta44600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44601,meta44600__$1){
var self__ = this;
var _44601__$1 = this;
return (new cljs.core.async.t_cljs$core$async44599(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44600__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44599.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44601){
var self__ = this;
var _44601__$1 = this;
return self__.meta44600;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44599.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async44599.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44599.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async44599.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44599.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44599.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44599.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44599.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44599.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta44600","meta44600",1900924735,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44599.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44599";

cljs.core.async.t_cljs$core$async44599.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__39001__auto__,writer__39002__auto__,opt__39003__auto__){
return cljs.core._write.call(null,writer__39002__auto__,"cljs.core.async/t_cljs$core$async44599");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async44599 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async44599(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44600){
return (new cljs.core.async.t_cljs$core$async44599(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44600));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async44599(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43031__auto___44764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43031__auto___44764,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (c__43031__auto___44764,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_44701){
var state_val_44702 = (state_44701[(1)]);
if((state_val_44702 === (7))){
var inst_44617 = (state_44701[(2)]);
var state_44701__$1 = state_44701;
var statearr_44703_44765 = state_44701__$1;
(statearr_44703_44765[(2)] = inst_44617);

(statearr_44703_44765[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (20))){
var inst_44629 = (state_44701[(7)]);
var state_44701__$1 = state_44701;
var statearr_44704_44766 = state_44701__$1;
(statearr_44704_44766[(2)] = inst_44629);

(statearr_44704_44766[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (27))){
var state_44701__$1 = state_44701;
var statearr_44705_44767 = state_44701__$1;
(statearr_44705_44767[(2)] = null);

(statearr_44705_44767[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (1))){
var inst_44605 = (state_44701[(8)]);
var inst_44605__$1 = calc_state.call(null);
var inst_44607 = (inst_44605__$1 == null);
var inst_44608 = cljs.core.not.call(null,inst_44607);
var state_44701__$1 = (function (){var statearr_44706 = state_44701;
(statearr_44706[(8)] = inst_44605__$1);

return statearr_44706;
})();
if(inst_44608){
var statearr_44707_44768 = state_44701__$1;
(statearr_44707_44768[(1)] = (2));

} else {
var statearr_44708_44769 = state_44701__$1;
(statearr_44708_44769[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (24))){
var inst_44675 = (state_44701[(9)]);
var inst_44661 = (state_44701[(10)]);
var inst_44652 = (state_44701[(11)]);
var inst_44675__$1 = inst_44652.call(null,inst_44661);
var state_44701__$1 = (function (){var statearr_44709 = state_44701;
(statearr_44709[(9)] = inst_44675__$1);

return statearr_44709;
})();
if(cljs.core.truth_(inst_44675__$1)){
var statearr_44710_44770 = state_44701__$1;
(statearr_44710_44770[(1)] = (29));

} else {
var statearr_44711_44771 = state_44701__$1;
(statearr_44711_44771[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (4))){
var inst_44620 = (state_44701[(2)]);
var state_44701__$1 = state_44701;
if(cljs.core.truth_(inst_44620)){
var statearr_44712_44772 = state_44701__$1;
(statearr_44712_44772[(1)] = (8));

} else {
var statearr_44713_44773 = state_44701__$1;
(statearr_44713_44773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (15))){
var inst_44646 = (state_44701[(2)]);
var state_44701__$1 = state_44701;
if(cljs.core.truth_(inst_44646)){
var statearr_44714_44774 = state_44701__$1;
(statearr_44714_44774[(1)] = (19));

} else {
var statearr_44715_44775 = state_44701__$1;
(statearr_44715_44775[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (21))){
var inst_44651 = (state_44701[(12)]);
var inst_44651__$1 = (state_44701[(2)]);
var inst_44652 = cljs.core.get.call(null,inst_44651__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44653 = cljs.core.get.call(null,inst_44651__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44654 = cljs.core.get.call(null,inst_44651__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44701__$1 = (function (){var statearr_44716 = state_44701;
(statearr_44716[(12)] = inst_44651__$1);

(statearr_44716[(13)] = inst_44653);

(statearr_44716[(11)] = inst_44652);

return statearr_44716;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_44701__$1,(22),inst_44654);
} else {
if((state_val_44702 === (31))){
var inst_44683 = (state_44701[(2)]);
var state_44701__$1 = state_44701;
if(cljs.core.truth_(inst_44683)){
var statearr_44717_44776 = state_44701__$1;
(statearr_44717_44776[(1)] = (32));

} else {
var statearr_44718_44777 = state_44701__$1;
(statearr_44718_44777[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (32))){
var inst_44660 = (state_44701[(14)]);
var state_44701__$1 = state_44701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44701__$1,(35),out,inst_44660);
} else {
if((state_val_44702 === (33))){
var inst_44651 = (state_44701[(12)]);
var inst_44629 = inst_44651;
var state_44701__$1 = (function (){var statearr_44719 = state_44701;
(statearr_44719[(7)] = inst_44629);

return statearr_44719;
})();
var statearr_44720_44778 = state_44701__$1;
(statearr_44720_44778[(2)] = null);

(statearr_44720_44778[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (13))){
var inst_44629 = (state_44701[(7)]);
var inst_44636 = inst_44629.cljs$lang$protocol_mask$partition0$;
var inst_44637 = (inst_44636 & (64));
var inst_44638 = inst_44629.cljs$core$ISeq$;
var inst_44639 = (inst_44637) || (inst_44638);
var state_44701__$1 = state_44701;
if(cljs.core.truth_(inst_44639)){
var statearr_44721_44779 = state_44701__$1;
(statearr_44721_44779[(1)] = (16));

} else {
var statearr_44722_44780 = state_44701__$1;
(statearr_44722_44780[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (22))){
var inst_44661 = (state_44701[(10)]);
var inst_44660 = (state_44701[(14)]);
var inst_44659 = (state_44701[(2)]);
var inst_44660__$1 = cljs.core.nth.call(null,inst_44659,(0),null);
var inst_44661__$1 = cljs.core.nth.call(null,inst_44659,(1),null);
var inst_44662 = (inst_44660__$1 == null);
var inst_44663 = cljs.core._EQ_.call(null,inst_44661__$1,change);
var inst_44664 = (inst_44662) || (inst_44663);
var state_44701__$1 = (function (){var statearr_44723 = state_44701;
(statearr_44723[(10)] = inst_44661__$1);

(statearr_44723[(14)] = inst_44660__$1);

return statearr_44723;
})();
if(cljs.core.truth_(inst_44664)){
var statearr_44724_44781 = state_44701__$1;
(statearr_44724_44781[(1)] = (23));

} else {
var statearr_44725_44782 = state_44701__$1;
(statearr_44725_44782[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (36))){
var inst_44651 = (state_44701[(12)]);
var inst_44629 = inst_44651;
var state_44701__$1 = (function (){var statearr_44726 = state_44701;
(statearr_44726[(7)] = inst_44629);

return statearr_44726;
})();
var statearr_44727_44783 = state_44701__$1;
(statearr_44727_44783[(2)] = null);

(statearr_44727_44783[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (29))){
var inst_44675 = (state_44701[(9)]);
var state_44701__$1 = state_44701;
var statearr_44728_44784 = state_44701__$1;
(statearr_44728_44784[(2)] = inst_44675);

(statearr_44728_44784[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (6))){
var state_44701__$1 = state_44701;
var statearr_44729_44785 = state_44701__$1;
(statearr_44729_44785[(2)] = false);

(statearr_44729_44785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (28))){
var inst_44671 = (state_44701[(2)]);
var inst_44672 = calc_state.call(null);
var inst_44629 = inst_44672;
var state_44701__$1 = (function (){var statearr_44730 = state_44701;
(statearr_44730[(15)] = inst_44671);

(statearr_44730[(7)] = inst_44629);

return statearr_44730;
})();
var statearr_44731_44786 = state_44701__$1;
(statearr_44731_44786[(2)] = null);

(statearr_44731_44786[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (25))){
var inst_44697 = (state_44701[(2)]);
var state_44701__$1 = state_44701;
var statearr_44732_44787 = state_44701__$1;
(statearr_44732_44787[(2)] = inst_44697);

(statearr_44732_44787[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (34))){
var inst_44695 = (state_44701[(2)]);
var state_44701__$1 = state_44701;
var statearr_44733_44788 = state_44701__$1;
(statearr_44733_44788[(2)] = inst_44695);

(statearr_44733_44788[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (17))){
var state_44701__$1 = state_44701;
var statearr_44734_44789 = state_44701__$1;
(statearr_44734_44789[(2)] = false);

(statearr_44734_44789[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (3))){
var state_44701__$1 = state_44701;
var statearr_44735_44790 = state_44701__$1;
(statearr_44735_44790[(2)] = false);

(statearr_44735_44790[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (12))){
var inst_44699 = (state_44701[(2)]);
var state_44701__$1 = state_44701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44701__$1,inst_44699);
} else {
if((state_val_44702 === (2))){
var inst_44605 = (state_44701[(8)]);
var inst_44610 = inst_44605.cljs$lang$protocol_mask$partition0$;
var inst_44611 = (inst_44610 & (64));
var inst_44612 = inst_44605.cljs$core$ISeq$;
var inst_44613 = (inst_44611) || (inst_44612);
var state_44701__$1 = state_44701;
if(cljs.core.truth_(inst_44613)){
var statearr_44736_44791 = state_44701__$1;
(statearr_44736_44791[(1)] = (5));

} else {
var statearr_44737_44792 = state_44701__$1;
(statearr_44737_44792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (23))){
var inst_44660 = (state_44701[(14)]);
var inst_44666 = (inst_44660 == null);
var state_44701__$1 = state_44701;
if(cljs.core.truth_(inst_44666)){
var statearr_44738_44793 = state_44701__$1;
(statearr_44738_44793[(1)] = (26));

} else {
var statearr_44739_44794 = state_44701__$1;
(statearr_44739_44794[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (35))){
var inst_44686 = (state_44701[(2)]);
var state_44701__$1 = state_44701;
if(cljs.core.truth_(inst_44686)){
var statearr_44740_44795 = state_44701__$1;
(statearr_44740_44795[(1)] = (36));

} else {
var statearr_44741_44796 = state_44701__$1;
(statearr_44741_44796[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (19))){
var inst_44629 = (state_44701[(7)]);
var inst_44648 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44629);
var state_44701__$1 = state_44701;
var statearr_44742_44797 = state_44701__$1;
(statearr_44742_44797[(2)] = inst_44648);

(statearr_44742_44797[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (11))){
var inst_44629 = (state_44701[(7)]);
var inst_44633 = (inst_44629 == null);
var inst_44634 = cljs.core.not.call(null,inst_44633);
var state_44701__$1 = state_44701;
if(inst_44634){
var statearr_44743_44798 = state_44701__$1;
(statearr_44743_44798[(1)] = (13));

} else {
var statearr_44744_44799 = state_44701__$1;
(statearr_44744_44799[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (9))){
var inst_44605 = (state_44701[(8)]);
var state_44701__$1 = state_44701;
var statearr_44745_44800 = state_44701__$1;
(statearr_44745_44800[(2)] = inst_44605);

(statearr_44745_44800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (5))){
var state_44701__$1 = state_44701;
var statearr_44746_44801 = state_44701__$1;
(statearr_44746_44801[(2)] = true);

(statearr_44746_44801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (14))){
var state_44701__$1 = state_44701;
var statearr_44747_44802 = state_44701__$1;
(statearr_44747_44802[(2)] = false);

(statearr_44747_44802[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (26))){
var inst_44661 = (state_44701[(10)]);
var inst_44668 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_44661);
var state_44701__$1 = state_44701;
var statearr_44748_44803 = state_44701__$1;
(statearr_44748_44803[(2)] = inst_44668);

(statearr_44748_44803[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (16))){
var state_44701__$1 = state_44701;
var statearr_44749_44804 = state_44701__$1;
(statearr_44749_44804[(2)] = true);

(statearr_44749_44804[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (38))){
var inst_44691 = (state_44701[(2)]);
var state_44701__$1 = state_44701;
var statearr_44750_44805 = state_44701__$1;
(statearr_44750_44805[(2)] = inst_44691);

(statearr_44750_44805[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (30))){
var inst_44661 = (state_44701[(10)]);
var inst_44653 = (state_44701[(13)]);
var inst_44652 = (state_44701[(11)]);
var inst_44678 = cljs.core.empty_QMARK_.call(null,inst_44652);
var inst_44679 = inst_44653.call(null,inst_44661);
var inst_44680 = cljs.core.not.call(null,inst_44679);
var inst_44681 = (inst_44678) && (inst_44680);
var state_44701__$1 = state_44701;
var statearr_44751_44806 = state_44701__$1;
(statearr_44751_44806[(2)] = inst_44681);

(statearr_44751_44806[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (10))){
var inst_44605 = (state_44701[(8)]);
var inst_44625 = (state_44701[(2)]);
var inst_44626 = cljs.core.get.call(null,inst_44625,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44627 = cljs.core.get.call(null,inst_44625,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44628 = cljs.core.get.call(null,inst_44625,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44629 = inst_44605;
var state_44701__$1 = (function (){var statearr_44752 = state_44701;
(statearr_44752[(7)] = inst_44629);

(statearr_44752[(16)] = inst_44627);

(statearr_44752[(17)] = inst_44626);

(statearr_44752[(18)] = inst_44628);

return statearr_44752;
})();
var statearr_44753_44807 = state_44701__$1;
(statearr_44753_44807[(2)] = null);

(statearr_44753_44807[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (18))){
var inst_44643 = (state_44701[(2)]);
var state_44701__$1 = state_44701;
var statearr_44754_44808 = state_44701__$1;
(statearr_44754_44808[(2)] = inst_44643);

(statearr_44754_44808[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (37))){
var state_44701__$1 = state_44701;
var statearr_44755_44809 = state_44701__$1;
(statearr_44755_44809[(2)] = null);

(statearr_44755_44809[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44702 === (8))){
var inst_44605 = (state_44701[(8)]);
var inst_44622 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44605);
var state_44701__$1 = state_44701;
var statearr_44756_44810 = state_44701__$1;
(statearr_44756_44810[(2)] = inst_44622);

(statearr_44756_44810[(1)] = (10));


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
});})(c__43031__auto___44764,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__42919__auto__,c__43031__auto___44764,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__42920__auto__ = null;
var cljs$core$async$mix_$_state_machine__42920__auto____0 = (function (){
var statearr_44760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44760[(0)] = cljs$core$async$mix_$_state_machine__42920__auto__);

(statearr_44760[(1)] = (1));

return statearr_44760;
});
var cljs$core$async$mix_$_state_machine__42920__auto____1 = (function (state_44701){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_44701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e44761){if((e44761 instanceof Object)){
var ex__42923__auto__ = e44761;
var statearr_44762_44811 = state_44701;
(statearr_44762_44811[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44812 = state_44701;
state_44701 = G__44812;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42920__auto__ = function(state_44701){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42920__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42920__auto____1.call(this,state_44701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42920__auto____0;
cljs$core$async$mix_$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42920__auto____1;
return cljs$core$async$mix_$_state_machine__42920__auto__;
})()
;})(switch__42919__auto__,c__43031__auto___44764,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__43033__auto__ = (function (){var statearr_44763 = f__43032__auto__.call(null);
(statearr_44763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto___44764);

return statearr_44763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(c__43031__auto___44764,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__39058__auto__ = (((p == null))?null:p);
var m__39059__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__39059__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__39058__auto__ = (((p == null))?null:p);
var m__39059__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,p,v,ch);
} else {
var m__39059__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args44813 = [];
var len__39470__auto___44816 = arguments.length;
var i__39471__auto___44817 = (0);
while(true){
if((i__39471__auto___44817 < len__39470__auto___44816)){
args44813.push((arguments[i__39471__auto___44817]));

var G__44818 = (i__39471__auto___44817 + (1));
i__39471__auto___44817 = G__44818;
continue;
} else {
}
break;
}

var G__44815 = args44813.length;
switch (G__44815) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44813.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__39058__auto__ = (((p == null))?null:p);
var m__39059__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,p);
} else {
var m__39059__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__39058__auto__ = (((p == null))?null:p);
var m__39059__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,p,v);
} else {
var m__39059__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args44821 = [];
var len__39470__auto___44946 = arguments.length;
var i__39471__auto___44947 = (0);
while(true){
if((i__39471__auto___44947 < len__39470__auto___44946)){
args44821.push((arguments[i__39471__auto___44947]));

var G__44948 = (i__39471__auto___44947 + (1));
i__39471__auto___44947 = G__44948;
continue;
} else {
}
break;
}

var G__44823 = args44821.length;
switch (G__44823) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44821.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__38395__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__38395__auto__)){
return or__38395__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__38395__auto__,mults){
return (function (p1__44820_SHARP_){
if(cljs.core.truth_(p1__44820_SHARP_.call(null,topic))){
return p1__44820_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__44820_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__38395__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async44824 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44824 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44825){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44825 = meta44825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_44826,meta44825__$1){
var self__ = this;
var _44826__$1 = this;
return (new cljs.core.async.t_cljs$core$async44824(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44825__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44824.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_44826){
var self__ = this;
var _44826__$1 = this;
return self__.meta44825;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44824.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async44824.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44824.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async44824.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44824.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44824.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44824.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44824.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44825","meta44825",1134366348,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44824.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44824.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44824";

cljs.core.async.t_cljs$core$async44824.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__39001__auto__,writer__39002__auto__,opt__39003__auto__){
return cljs.core._write.call(null,writer__39002__auto__,"cljs.core.async/t_cljs$core$async44824");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async44824 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async44824(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44825){
return (new cljs.core.async.t_cljs$core$async44824(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44825));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async44824(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43031__auto___44950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43031__auto___44950,mults,ensure_mult,p){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (c__43031__auto___44950,mults,ensure_mult,p){
return (function (state_44898){
var state_val_44899 = (state_44898[(1)]);
if((state_val_44899 === (7))){
var inst_44894 = (state_44898[(2)]);
var state_44898__$1 = state_44898;
var statearr_44900_44951 = state_44898__$1;
(statearr_44900_44951[(2)] = inst_44894);

(statearr_44900_44951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (20))){
var state_44898__$1 = state_44898;
var statearr_44901_44952 = state_44898__$1;
(statearr_44901_44952[(2)] = null);

(statearr_44901_44952[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (1))){
var state_44898__$1 = state_44898;
var statearr_44902_44953 = state_44898__$1;
(statearr_44902_44953[(2)] = null);

(statearr_44902_44953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (24))){
var inst_44877 = (state_44898[(7)]);
var inst_44886 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_44877);
var state_44898__$1 = state_44898;
var statearr_44903_44954 = state_44898__$1;
(statearr_44903_44954[(2)] = inst_44886);

(statearr_44903_44954[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (4))){
var inst_44829 = (state_44898[(8)]);
var inst_44829__$1 = (state_44898[(2)]);
var inst_44830 = (inst_44829__$1 == null);
var state_44898__$1 = (function (){var statearr_44904 = state_44898;
(statearr_44904[(8)] = inst_44829__$1);

return statearr_44904;
})();
if(cljs.core.truth_(inst_44830)){
var statearr_44905_44955 = state_44898__$1;
(statearr_44905_44955[(1)] = (5));

} else {
var statearr_44906_44956 = state_44898__$1;
(statearr_44906_44956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (15))){
var inst_44871 = (state_44898[(2)]);
var state_44898__$1 = state_44898;
var statearr_44907_44957 = state_44898__$1;
(statearr_44907_44957[(2)] = inst_44871);

(statearr_44907_44957[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (21))){
var inst_44891 = (state_44898[(2)]);
var state_44898__$1 = (function (){var statearr_44908 = state_44898;
(statearr_44908[(9)] = inst_44891);

return statearr_44908;
})();
var statearr_44909_44958 = state_44898__$1;
(statearr_44909_44958[(2)] = null);

(statearr_44909_44958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (13))){
var inst_44853 = (state_44898[(10)]);
var inst_44855 = cljs.core.chunked_seq_QMARK_.call(null,inst_44853);
var state_44898__$1 = state_44898;
if(inst_44855){
var statearr_44910_44959 = state_44898__$1;
(statearr_44910_44959[(1)] = (16));

} else {
var statearr_44911_44960 = state_44898__$1;
(statearr_44911_44960[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (22))){
var inst_44883 = (state_44898[(2)]);
var state_44898__$1 = state_44898;
if(cljs.core.truth_(inst_44883)){
var statearr_44912_44961 = state_44898__$1;
(statearr_44912_44961[(1)] = (23));

} else {
var statearr_44913_44962 = state_44898__$1;
(statearr_44913_44962[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (6))){
var inst_44879 = (state_44898[(11)]);
var inst_44829 = (state_44898[(8)]);
var inst_44877 = (state_44898[(7)]);
var inst_44877__$1 = topic_fn.call(null,inst_44829);
var inst_44878 = cljs.core.deref.call(null,mults);
var inst_44879__$1 = cljs.core.get.call(null,inst_44878,inst_44877__$1);
var state_44898__$1 = (function (){var statearr_44914 = state_44898;
(statearr_44914[(11)] = inst_44879__$1);

(statearr_44914[(7)] = inst_44877__$1);

return statearr_44914;
})();
if(cljs.core.truth_(inst_44879__$1)){
var statearr_44915_44963 = state_44898__$1;
(statearr_44915_44963[(1)] = (19));

} else {
var statearr_44916_44964 = state_44898__$1;
(statearr_44916_44964[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (25))){
var inst_44888 = (state_44898[(2)]);
var state_44898__$1 = state_44898;
var statearr_44917_44965 = state_44898__$1;
(statearr_44917_44965[(2)] = inst_44888);

(statearr_44917_44965[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (17))){
var inst_44853 = (state_44898[(10)]);
var inst_44862 = cljs.core.first.call(null,inst_44853);
var inst_44863 = cljs.core.async.muxch_STAR_.call(null,inst_44862);
var inst_44864 = cljs.core.async.close_BANG_.call(null,inst_44863);
var inst_44865 = cljs.core.next.call(null,inst_44853);
var inst_44839 = inst_44865;
var inst_44840 = null;
var inst_44841 = (0);
var inst_44842 = (0);
var state_44898__$1 = (function (){var statearr_44918 = state_44898;
(statearr_44918[(12)] = inst_44841);

(statearr_44918[(13)] = inst_44839);

(statearr_44918[(14)] = inst_44840);

(statearr_44918[(15)] = inst_44842);

(statearr_44918[(16)] = inst_44864);

return statearr_44918;
})();
var statearr_44919_44966 = state_44898__$1;
(statearr_44919_44966[(2)] = null);

(statearr_44919_44966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (3))){
var inst_44896 = (state_44898[(2)]);
var state_44898__$1 = state_44898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44898__$1,inst_44896);
} else {
if((state_val_44899 === (12))){
var inst_44873 = (state_44898[(2)]);
var state_44898__$1 = state_44898;
var statearr_44920_44967 = state_44898__$1;
(statearr_44920_44967[(2)] = inst_44873);

(statearr_44920_44967[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (2))){
var state_44898__$1 = state_44898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44898__$1,(4),ch);
} else {
if((state_val_44899 === (23))){
var state_44898__$1 = state_44898;
var statearr_44921_44968 = state_44898__$1;
(statearr_44921_44968[(2)] = null);

(statearr_44921_44968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (19))){
var inst_44879 = (state_44898[(11)]);
var inst_44829 = (state_44898[(8)]);
var inst_44881 = cljs.core.async.muxch_STAR_.call(null,inst_44879);
var state_44898__$1 = state_44898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44898__$1,(22),inst_44881,inst_44829);
} else {
if((state_val_44899 === (11))){
var inst_44839 = (state_44898[(13)]);
var inst_44853 = (state_44898[(10)]);
var inst_44853__$1 = cljs.core.seq.call(null,inst_44839);
var state_44898__$1 = (function (){var statearr_44922 = state_44898;
(statearr_44922[(10)] = inst_44853__$1);

return statearr_44922;
})();
if(inst_44853__$1){
var statearr_44923_44969 = state_44898__$1;
(statearr_44923_44969[(1)] = (13));

} else {
var statearr_44924_44970 = state_44898__$1;
(statearr_44924_44970[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (9))){
var inst_44875 = (state_44898[(2)]);
var state_44898__$1 = state_44898;
var statearr_44925_44971 = state_44898__$1;
(statearr_44925_44971[(2)] = inst_44875);

(statearr_44925_44971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (5))){
var inst_44836 = cljs.core.deref.call(null,mults);
var inst_44837 = cljs.core.vals.call(null,inst_44836);
var inst_44838 = cljs.core.seq.call(null,inst_44837);
var inst_44839 = inst_44838;
var inst_44840 = null;
var inst_44841 = (0);
var inst_44842 = (0);
var state_44898__$1 = (function (){var statearr_44926 = state_44898;
(statearr_44926[(12)] = inst_44841);

(statearr_44926[(13)] = inst_44839);

(statearr_44926[(14)] = inst_44840);

(statearr_44926[(15)] = inst_44842);

return statearr_44926;
})();
var statearr_44927_44972 = state_44898__$1;
(statearr_44927_44972[(2)] = null);

(statearr_44927_44972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (14))){
var state_44898__$1 = state_44898;
var statearr_44931_44973 = state_44898__$1;
(statearr_44931_44973[(2)] = null);

(statearr_44931_44973[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (16))){
var inst_44853 = (state_44898[(10)]);
var inst_44857 = cljs.core.chunk_first.call(null,inst_44853);
var inst_44858 = cljs.core.chunk_rest.call(null,inst_44853);
var inst_44859 = cljs.core.count.call(null,inst_44857);
var inst_44839 = inst_44858;
var inst_44840 = inst_44857;
var inst_44841 = inst_44859;
var inst_44842 = (0);
var state_44898__$1 = (function (){var statearr_44932 = state_44898;
(statearr_44932[(12)] = inst_44841);

(statearr_44932[(13)] = inst_44839);

(statearr_44932[(14)] = inst_44840);

(statearr_44932[(15)] = inst_44842);

return statearr_44932;
})();
var statearr_44933_44974 = state_44898__$1;
(statearr_44933_44974[(2)] = null);

(statearr_44933_44974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (10))){
var inst_44841 = (state_44898[(12)]);
var inst_44839 = (state_44898[(13)]);
var inst_44840 = (state_44898[(14)]);
var inst_44842 = (state_44898[(15)]);
var inst_44847 = cljs.core._nth.call(null,inst_44840,inst_44842);
var inst_44848 = cljs.core.async.muxch_STAR_.call(null,inst_44847);
var inst_44849 = cljs.core.async.close_BANG_.call(null,inst_44848);
var inst_44850 = (inst_44842 + (1));
var tmp44928 = inst_44841;
var tmp44929 = inst_44839;
var tmp44930 = inst_44840;
var inst_44839__$1 = tmp44929;
var inst_44840__$1 = tmp44930;
var inst_44841__$1 = tmp44928;
var inst_44842__$1 = inst_44850;
var state_44898__$1 = (function (){var statearr_44934 = state_44898;
(statearr_44934[(12)] = inst_44841__$1);

(statearr_44934[(13)] = inst_44839__$1);

(statearr_44934[(14)] = inst_44840__$1);

(statearr_44934[(15)] = inst_44842__$1);

(statearr_44934[(17)] = inst_44849);

return statearr_44934;
})();
var statearr_44935_44975 = state_44898__$1;
(statearr_44935_44975[(2)] = null);

(statearr_44935_44975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (18))){
var inst_44868 = (state_44898[(2)]);
var state_44898__$1 = state_44898;
var statearr_44936_44976 = state_44898__$1;
(statearr_44936_44976[(2)] = inst_44868);

(statearr_44936_44976[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44899 === (8))){
var inst_44841 = (state_44898[(12)]);
var inst_44842 = (state_44898[(15)]);
var inst_44844 = (inst_44842 < inst_44841);
var inst_44845 = inst_44844;
var state_44898__$1 = state_44898;
if(cljs.core.truth_(inst_44845)){
var statearr_44937_44977 = state_44898__$1;
(statearr_44937_44977[(1)] = (10));

} else {
var statearr_44938_44978 = state_44898__$1;
(statearr_44938_44978[(1)] = (11));

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
});})(c__43031__auto___44950,mults,ensure_mult,p))
;
return ((function (switch__42919__auto__,c__43031__auto___44950,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__42920__auto__ = null;
var cljs$core$async$state_machine__42920__auto____0 = (function (){
var statearr_44942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44942[(0)] = cljs$core$async$state_machine__42920__auto__);

(statearr_44942[(1)] = (1));

return statearr_44942;
});
var cljs$core$async$state_machine__42920__auto____1 = (function (state_44898){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_44898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e44943){if((e44943 instanceof Object)){
var ex__42923__auto__ = e44943;
var statearr_44944_44979 = state_44898;
(statearr_44944_44979[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44980 = state_44898;
state_44898 = G__44980;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
cljs$core$async$state_machine__42920__auto__ = function(state_44898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42920__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42920__auto____1.call(this,state_44898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42920__auto____0;
cljs$core$async$state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42920__auto____1;
return cljs$core$async$state_machine__42920__auto__;
})()
;})(switch__42919__auto__,c__43031__auto___44950,mults,ensure_mult,p))
})();
var state__43033__auto__ = (function (){var statearr_44945 = f__43032__auto__.call(null);
(statearr_44945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto___44950);

return statearr_44945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(c__43031__auto___44950,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args44981 = [];
var len__39470__auto___44984 = arguments.length;
var i__39471__auto___44985 = (0);
while(true){
if((i__39471__auto___44985 < len__39470__auto___44984)){
args44981.push((arguments[i__39471__auto___44985]));

var G__44986 = (i__39471__auto___44985 + (1));
i__39471__auto___44985 = G__44986;
continue;
} else {
}
break;
}

var G__44983 = args44981.length;
switch (G__44983) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44981.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args44988 = [];
var len__39470__auto___44991 = arguments.length;
var i__39471__auto___44992 = (0);
while(true){
if((i__39471__auto___44992 < len__39470__auto___44991)){
args44988.push((arguments[i__39471__auto___44992]));

var G__44993 = (i__39471__auto___44992 + (1));
i__39471__auto___44992 = G__44993;
continue;
} else {
}
break;
}

var G__44990 = args44988.length;
switch (G__44990) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44988.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args44995 = [];
var len__39470__auto___45066 = arguments.length;
var i__39471__auto___45067 = (0);
while(true){
if((i__39471__auto___45067 < len__39470__auto___45066)){
args44995.push((arguments[i__39471__auto___45067]));

var G__45068 = (i__39471__auto___45067 + (1));
i__39471__auto___45067 = G__45068;
continue;
} else {
}
break;
}

var G__44997 = args44995.length;
switch (G__44997) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44995.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__43031__auto___45070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43031__auto___45070,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (c__43031__auto___45070,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_45036){
var state_val_45037 = (state_45036[(1)]);
if((state_val_45037 === (7))){
var state_45036__$1 = state_45036;
var statearr_45038_45071 = state_45036__$1;
(statearr_45038_45071[(2)] = null);

(statearr_45038_45071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45037 === (1))){
var state_45036__$1 = state_45036;
var statearr_45039_45072 = state_45036__$1;
(statearr_45039_45072[(2)] = null);

(statearr_45039_45072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45037 === (4))){
var inst_45000 = (state_45036[(7)]);
var inst_45002 = (inst_45000 < cnt);
var state_45036__$1 = state_45036;
if(cljs.core.truth_(inst_45002)){
var statearr_45040_45073 = state_45036__$1;
(statearr_45040_45073[(1)] = (6));

} else {
var statearr_45041_45074 = state_45036__$1;
(statearr_45041_45074[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45037 === (15))){
var inst_45032 = (state_45036[(2)]);
var state_45036__$1 = state_45036;
var statearr_45042_45075 = state_45036__$1;
(statearr_45042_45075[(2)] = inst_45032);

(statearr_45042_45075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45037 === (13))){
var inst_45025 = cljs.core.async.close_BANG_.call(null,out);
var state_45036__$1 = state_45036;
var statearr_45043_45076 = state_45036__$1;
(statearr_45043_45076[(2)] = inst_45025);

(statearr_45043_45076[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45037 === (6))){
var state_45036__$1 = state_45036;
var statearr_45044_45077 = state_45036__$1;
(statearr_45044_45077[(2)] = null);

(statearr_45044_45077[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45037 === (3))){
var inst_45034 = (state_45036[(2)]);
var state_45036__$1 = state_45036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45036__$1,inst_45034);
} else {
if((state_val_45037 === (12))){
var inst_45022 = (state_45036[(8)]);
var inst_45022__$1 = (state_45036[(2)]);
var inst_45023 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_45022__$1);
var state_45036__$1 = (function (){var statearr_45045 = state_45036;
(statearr_45045[(8)] = inst_45022__$1);

return statearr_45045;
})();
if(cljs.core.truth_(inst_45023)){
var statearr_45046_45078 = state_45036__$1;
(statearr_45046_45078[(1)] = (13));

} else {
var statearr_45047_45079 = state_45036__$1;
(statearr_45047_45079[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45037 === (2))){
var inst_44999 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_45000 = (0);
var state_45036__$1 = (function (){var statearr_45048 = state_45036;
(statearr_45048[(7)] = inst_45000);

(statearr_45048[(9)] = inst_44999);

return statearr_45048;
})();
var statearr_45049_45080 = state_45036__$1;
(statearr_45049_45080[(2)] = null);

(statearr_45049_45080[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45037 === (11))){
var inst_45000 = (state_45036[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45036,(10),Object,null,(9));
var inst_45009 = chs__$1.call(null,inst_45000);
var inst_45010 = done.call(null,inst_45000);
var inst_45011 = cljs.core.async.take_BANG_.call(null,inst_45009,inst_45010);
var state_45036__$1 = state_45036;
var statearr_45050_45081 = state_45036__$1;
(statearr_45050_45081[(2)] = inst_45011);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45036__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45037 === (9))){
var inst_45000 = (state_45036[(7)]);
var inst_45013 = (state_45036[(2)]);
var inst_45014 = (inst_45000 + (1));
var inst_45000__$1 = inst_45014;
var state_45036__$1 = (function (){var statearr_45051 = state_45036;
(statearr_45051[(7)] = inst_45000__$1);

(statearr_45051[(10)] = inst_45013);

return statearr_45051;
})();
var statearr_45052_45082 = state_45036__$1;
(statearr_45052_45082[(2)] = null);

(statearr_45052_45082[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45037 === (5))){
var inst_45020 = (state_45036[(2)]);
var state_45036__$1 = (function (){var statearr_45053 = state_45036;
(statearr_45053[(11)] = inst_45020);

return statearr_45053;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45036__$1,(12),dchan);
} else {
if((state_val_45037 === (14))){
var inst_45022 = (state_45036[(8)]);
var inst_45027 = cljs.core.apply.call(null,f,inst_45022);
var state_45036__$1 = state_45036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45036__$1,(16),out,inst_45027);
} else {
if((state_val_45037 === (16))){
var inst_45029 = (state_45036[(2)]);
var state_45036__$1 = (function (){var statearr_45054 = state_45036;
(statearr_45054[(12)] = inst_45029);

return statearr_45054;
})();
var statearr_45055_45083 = state_45036__$1;
(statearr_45055_45083[(2)] = null);

(statearr_45055_45083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45037 === (10))){
var inst_45004 = (state_45036[(2)]);
var inst_45005 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_45036__$1 = (function (){var statearr_45056 = state_45036;
(statearr_45056[(13)] = inst_45004);

return statearr_45056;
})();
var statearr_45057_45084 = state_45036__$1;
(statearr_45057_45084[(2)] = inst_45005);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45036__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45037 === (8))){
var inst_45018 = (state_45036[(2)]);
var state_45036__$1 = state_45036;
var statearr_45058_45085 = state_45036__$1;
(statearr_45058_45085[(2)] = inst_45018);

(statearr_45058_45085[(1)] = (5));


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
});})(c__43031__auto___45070,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__42919__auto__,c__43031__auto___45070,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__42920__auto__ = null;
var cljs$core$async$state_machine__42920__auto____0 = (function (){
var statearr_45062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45062[(0)] = cljs$core$async$state_machine__42920__auto__);

(statearr_45062[(1)] = (1));

return statearr_45062;
});
var cljs$core$async$state_machine__42920__auto____1 = (function (state_45036){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_45036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e45063){if((e45063 instanceof Object)){
var ex__42923__auto__ = e45063;
var statearr_45064_45086 = state_45036;
(statearr_45064_45086[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45087 = state_45036;
state_45036 = G__45087;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
cljs$core$async$state_machine__42920__auto__ = function(state_45036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42920__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42920__auto____1.call(this,state_45036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42920__auto____0;
cljs$core$async$state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42920__auto____1;
return cljs$core$async$state_machine__42920__auto__;
})()
;})(switch__42919__auto__,c__43031__auto___45070,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__43033__auto__ = (function (){var statearr_45065 = f__43032__auto__.call(null);
(statearr_45065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto___45070);

return statearr_45065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(c__43031__auto___45070,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args45089 = [];
var len__39470__auto___45147 = arguments.length;
var i__39471__auto___45148 = (0);
while(true){
if((i__39471__auto___45148 < len__39470__auto___45147)){
args45089.push((arguments[i__39471__auto___45148]));

var G__45149 = (i__39471__auto___45148 + (1));
i__39471__auto___45148 = G__45149;
continue;
} else {
}
break;
}

var G__45091 = args45089.length;
switch (G__45091) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45089.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43031__auto___45151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43031__auto___45151,out){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (c__43031__auto___45151,out){
return (function (state_45123){
var state_val_45124 = (state_45123[(1)]);
if((state_val_45124 === (7))){
var inst_45103 = (state_45123[(7)]);
var inst_45102 = (state_45123[(8)]);
var inst_45102__$1 = (state_45123[(2)]);
var inst_45103__$1 = cljs.core.nth.call(null,inst_45102__$1,(0),null);
var inst_45104 = cljs.core.nth.call(null,inst_45102__$1,(1),null);
var inst_45105 = (inst_45103__$1 == null);
var state_45123__$1 = (function (){var statearr_45125 = state_45123;
(statearr_45125[(7)] = inst_45103__$1);

(statearr_45125[(9)] = inst_45104);

(statearr_45125[(8)] = inst_45102__$1);

return statearr_45125;
})();
if(cljs.core.truth_(inst_45105)){
var statearr_45126_45152 = state_45123__$1;
(statearr_45126_45152[(1)] = (8));

} else {
var statearr_45127_45153 = state_45123__$1;
(statearr_45127_45153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45124 === (1))){
var inst_45092 = cljs.core.vec.call(null,chs);
var inst_45093 = inst_45092;
var state_45123__$1 = (function (){var statearr_45128 = state_45123;
(statearr_45128[(10)] = inst_45093);

return statearr_45128;
})();
var statearr_45129_45154 = state_45123__$1;
(statearr_45129_45154[(2)] = null);

(statearr_45129_45154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45124 === (4))){
var inst_45093 = (state_45123[(10)]);
var state_45123__$1 = state_45123;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45123__$1,(7),inst_45093);
} else {
if((state_val_45124 === (6))){
var inst_45119 = (state_45123[(2)]);
var state_45123__$1 = state_45123;
var statearr_45130_45155 = state_45123__$1;
(statearr_45130_45155[(2)] = inst_45119);

(statearr_45130_45155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45124 === (3))){
var inst_45121 = (state_45123[(2)]);
var state_45123__$1 = state_45123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45123__$1,inst_45121);
} else {
if((state_val_45124 === (2))){
var inst_45093 = (state_45123[(10)]);
var inst_45095 = cljs.core.count.call(null,inst_45093);
var inst_45096 = (inst_45095 > (0));
var state_45123__$1 = state_45123;
if(cljs.core.truth_(inst_45096)){
var statearr_45132_45156 = state_45123__$1;
(statearr_45132_45156[(1)] = (4));

} else {
var statearr_45133_45157 = state_45123__$1;
(statearr_45133_45157[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45124 === (11))){
var inst_45093 = (state_45123[(10)]);
var inst_45112 = (state_45123[(2)]);
var tmp45131 = inst_45093;
var inst_45093__$1 = tmp45131;
var state_45123__$1 = (function (){var statearr_45134 = state_45123;
(statearr_45134[(10)] = inst_45093__$1);

(statearr_45134[(11)] = inst_45112);

return statearr_45134;
})();
var statearr_45135_45158 = state_45123__$1;
(statearr_45135_45158[(2)] = null);

(statearr_45135_45158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45124 === (9))){
var inst_45103 = (state_45123[(7)]);
var state_45123__$1 = state_45123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45123__$1,(11),out,inst_45103);
} else {
if((state_val_45124 === (5))){
var inst_45117 = cljs.core.async.close_BANG_.call(null,out);
var state_45123__$1 = state_45123;
var statearr_45136_45159 = state_45123__$1;
(statearr_45136_45159[(2)] = inst_45117);

(statearr_45136_45159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45124 === (10))){
var inst_45115 = (state_45123[(2)]);
var state_45123__$1 = state_45123;
var statearr_45137_45160 = state_45123__$1;
(statearr_45137_45160[(2)] = inst_45115);

(statearr_45137_45160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45124 === (8))){
var inst_45093 = (state_45123[(10)]);
var inst_45103 = (state_45123[(7)]);
var inst_45104 = (state_45123[(9)]);
var inst_45102 = (state_45123[(8)]);
var inst_45107 = (function (){var cs = inst_45093;
var vec__45098 = inst_45102;
var v = inst_45103;
var c = inst_45104;
return ((function (cs,vec__45098,v,c,inst_45093,inst_45103,inst_45104,inst_45102,state_val_45124,c__43031__auto___45151,out){
return (function (p1__45088_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__45088_SHARP_);
});
;})(cs,vec__45098,v,c,inst_45093,inst_45103,inst_45104,inst_45102,state_val_45124,c__43031__auto___45151,out))
})();
var inst_45108 = cljs.core.filterv.call(null,inst_45107,inst_45093);
var inst_45093__$1 = inst_45108;
var state_45123__$1 = (function (){var statearr_45138 = state_45123;
(statearr_45138[(10)] = inst_45093__$1);

return statearr_45138;
})();
var statearr_45139_45161 = state_45123__$1;
(statearr_45139_45161[(2)] = null);

(statearr_45139_45161[(1)] = (2));


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
});})(c__43031__auto___45151,out))
;
return ((function (switch__42919__auto__,c__43031__auto___45151,out){
return (function() {
var cljs$core$async$state_machine__42920__auto__ = null;
var cljs$core$async$state_machine__42920__auto____0 = (function (){
var statearr_45143 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45143[(0)] = cljs$core$async$state_machine__42920__auto__);

(statearr_45143[(1)] = (1));

return statearr_45143;
});
var cljs$core$async$state_machine__42920__auto____1 = (function (state_45123){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_45123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e45144){if((e45144 instanceof Object)){
var ex__42923__auto__ = e45144;
var statearr_45145_45162 = state_45123;
(statearr_45145_45162[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45163 = state_45123;
state_45123 = G__45163;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
cljs$core$async$state_machine__42920__auto__ = function(state_45123){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42920__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42920__auto____1.call(this,state_45123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42920__auto____0;
cljs$core$async$state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42920__auto____1;
return cljs$core$async$state_machine__42920__auto__;
})()
;})(switch__42919__auto__,c__43031__auto___45151,out))
})();
var state__43033__auto__ = (function (){var statearr_45146 = f__43032__auto__.call(null);
(statearr_45146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto___45151);

return statearr_45146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(c__43031__auto___45151,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args45164 = [];
var len__39470__auto___45213 = arguments.length;
var i__39471__auto___45214 = (0);
while(true){
if((i__39471__auto___45214 < len__39470__auto___45213)){
args45164.push((arguments[i__39471__auto___45214]));

var G__45215 = (i__39471__auto___45214 + (1));
i__39471__auto___45214 = G__45215;
continue;
} else {
}
break;
}

var G__45166 = args45164.length;
switch (G__45166) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45164.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43031__auto___45217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43031__auto___45217,out){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (c__43031__auto___45217,out){
return (function (state_45190){
var state_val_45191 = (state_45190[(1)]);
if((state_val_45191 === (7))){
var inst_45172 = (state_45190[(7)]);
var inst_45172__$1 = (state_45190[(2)]);
var inst_45173 = (inst_45172__$1 == null);
var inst_45174 = cljs.core.not.call(null,inst_45173);
var state_45190__$1 = (function (){var statearr_45192 = state_45190;
(statearr_45192[(7)] = inst_45172__$1);

return statearr_45192;
})();
if(inst_45174){
var statearr_45193_45218 = state_45190__$1;
(statearr_45193_45218[(1)] = (8));

} else {
var statearr_45194_45219 = state_45190__$1;
(statearr_45194_45219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45191 === (1))){
var inst_45167 = (0);
var state_45190__$1 = (function (){var statearr_45195 = state_45190;
(statearr_45195[(8)] = inst_45167);

return statearr_45195;
})();
var statearr_45196_45220 = state_45190__$1;
(statearr_45196_45220[(2)] = null);

(statearr_45196_45220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45191 === (4))){
var state_45190__$1 = state_45190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45190__$1,(7),ch);
} else {
if((state_val_45191 === (6))){
var inst_45185 = (state_45190[(2)]);
var state_45190__$1 = state_45190;
var statearr_45197_45221 = state_45190__$1;
(statearr_45197_45221[(2)] = inst_45185);

(statearr_45197_45221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45191 === (3))){
var inst_45187 = (state_45190[(2)]);
var inst_45188 = cljs.core.async.close_BANG_.call(null,out);
var state_45190__$1 = (function (){var statearr_45198 = state_45190;
(statearr_45198[(9)] = inst_45187);

return statearr_45198;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45190__$1,inst_45188);
} else {
if((state_val_45191 === (2))){
var inst_45167 = (state_45190[(8)]);
var inst_45169 = (inst_45167 < n);
var state_45190__$1 = state_45190;
if(cljs.core.truth_(inst_45169)){
var statearr_45199_45222 = state_45190__$1;
(statearr_45199_45222[(1)] = (4));

} else {
var statearr_45200_45223 = state_45190__$1;
(statearr_45200_45223[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45191 === (11))){
var inst_45167 = (state_45190[(8)]);
var inst_45177 = (state_45190[(2)]);
var inst_45178 = (inst_45167 + (1));
var inst_45167__$1 = inst_45178;
var state_45190__$1 = (function (){var statearr_45201 = state_45190;
(statearr_45201[(8)] = inst_45167__$1);

(statearr_45201[(10)] = inst_45177);

return statearr_45201;
})();
var statearr_45202_45224 = state_45190__$1;
(statearr_45202_45224[(2)] = null);

(statearr_45202_45224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45191 === (9))){
var state_45190__$1 = state_45190;
var statearr_45203_45225 = state_45190__$1;
(statearr_45203_45225[(2)] = null);

(statearr_45203_45225[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45191 === (5))){
var state_45190__$1 = state_45190;
var statearr_45204_45226 = state_45190__$1;
(statearr_45204_45226[(2)] = null);

(statearr_45204_45226[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45191 === (10))){
var inst_45182 = (state_45190[(2)]);
var state_45190__$1 = state_45190;
var statearr_45205_45227 = state_45190__$1;
(statearr_45205_45227[(2)] = inst_45182);

(statearr_45205_45227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45191 === (8))){
var inst_45172 = (state_45190[(7)]);
var state_45190__$1 = state_45190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45190__$1,(11),out,inst_45172);
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
});})(c__43031__auto___45217,out))
;
return ((function (switch__42919__auto__,c__43031__auto___45217,out){
return (function() {
var cljs$core$async$state_machine__42920__auto__ = null;
var cljs$core$async$state_machine__42920__auto____0 = (function (){
var statearr_45209 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45209[(0)] = cljs$core$async$state_machine__42920__auto__);

(statearr_45209[(1)] = (1));

return statearr_45209;
});
var cljs$core$async$state_machine__42920__auto____1 = (function (state_45190){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_45190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e45210){if((e45210 instanceof Object)){
var ex__42923__auto__ = e45210;
var statearr_45211_45228 = state_45190;
(statearr_45211_45228[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45229 = state_45190;
state_45190 = G__45229;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
cljs$core$async$state_machine__42920__auto__ = function(state_45190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42920__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42920__auto____1.call(this,state_45190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42920__auto____0;
cljs$core$async$state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42920__auto____1;
return cljs$core$async$state_machine__42920__auto__;
})()
;})(switch__42919__auto__,c__43031__auto___45217,out))
})();
var state__43033__auto__ = (function (){var statearr_45212 = f__43032__auto__.call(null);
(statearr_45212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto___45217);

return statearr_45212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(c__43031__auto___45217,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45237 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45237 = (function (map_LT_,f,ch,meta45238){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta45238 = meta45238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45239,meta45238__$1){
var self__ = this;
var _45239__$1 = this;
return (new cljs.core.async.t_cljs$core$async45237(self__.map_LT_,self__.f,self__.ch,meta45238__$1));
});

cljs.core.async.t_cljs$core$async45237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45239){
var self__ = this;
var _45239__$1 = this;
return self__.meta45238;
});

cljs.core.async.t_cljs$core$async45237.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async45237.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45237.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45237.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async45237.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async45240 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45240 = (function (map_LT_,f,ch,meta45238,_,fn1,meta45241){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta45238 = meta45238;
this._ = _;
this.fn1 = fn1;
this.meta45241 = meta45241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_45242,meta45241__$1){
var self__ = this;
var _45242__$1 = this;
return (new cljs.core.async.t_cljs$core$async45240(self__.map_LT_,self__.f,self__.ch,self__.meta45238,self__._,self__.fn1,meta45241__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async45240.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_45242){
var self__ = this;
var _45242__$1 = this;
return self__.meta45241;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45240.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async45240.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45240.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45240.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__45230_SHARP_){
return f1.call(null,(((p1__45230_SHARP_ == null))?null:self__.f.call(null,p1__45230_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async45240.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45238","meta45238",1299934772,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45237","cljs.core.async/t_cljs$core$async45237",5038410,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45241","meta45241",658290888,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45240.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45240";

cljs.core.async.t_cljs$core$async45240.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__39001__auto__,writer__39002__auto__,opt__39003__auto__){
return cljs.core._write.call(null,writer__39002__auto__,"cljs.core.async/t_cljs$core$async45240");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async45240 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45240(map_LT___$1,f__$1,ch__$1,meta45238__$1,___$2,fn1__$1,meta45241){
return (new cljs.core.async.t_cljs$core$async45240(map_LT___$1,f__$1,ch__$1,meta45238__$1,___$2,fn1__$1,meta45241));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async45240(self__.map_LT_,self__.f,self__.ch,self__.meta45238,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__38383__auto__ = ret;
if(cljs.core.truth_(and__38383__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__38383__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async45237.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async45237.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async45237.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45238","meta45238",1299934772,null)], null);
});

cljs.core.async.t_cljs$core$async45237.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45237";

cljs.core.async.t_cljs$core$async45237.cljs$lang$ctorPrWriter = (function (this__39001__auto__,writer__39002__auto__,opt__39003__auto__){
return cljs.core._write.call(null,writer__39002__auto__,"cljs.core.async/t_cljs$core$async45237");
});

cljs.core.async.__GT_t_cljs$core$async45237 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45237(map_LT___$1,f__$1,ch__$1,meta45238){
return (new cljs.core.async.t_cljs$core$async45237(map_LT___$1,f__$1,ch__$1,meta45238));
});

}

return (new cljs.core.async.t_cljs$core$async45237(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45246 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45246 = (function (map_GT_,f,ch,meta45247){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta45247 = meta45247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45248,meta45247__$1){
var self__ = this;
var _45248__$1 = this;
return (new cljs.core.async.t_cljs$core$async45246(self__.map_GT_,self__.f,self__.ch,meta45247__$1));
});

cljs.core.async.t_cljs$core$async45246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45248){
var self__ = this;
var _45248__$1 = this;
return self__.meta45247;
});

cljs.core.async.t_cljs$core$async45246.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async45246.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45246.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async45246.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45246.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async45246.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async45246.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45247","meta45247",-853915541,null)], null);
});

cljs.core.async.t_cljs$core$async45246.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45246";

cljs.core.async.t_cljs$core$async45246.cljs$lang$ctorPrWriter = (function (this__39001__auto__,writer__39002__auto__,opt__39003__auto__){
return cljs.core._write.call(null,writer__39002__auto__,"cljs.core.async/t_cljs$core$async45246");
});

cljs.core.async.__GT_t_cljs$core$async45246 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45246(map_GT___$1,f__$1,ch__$1,meta45247){
return (new cljs.core.async.t_cljs$core$async45246(map_GT___$1,f__$1,ch__$1,meta45247));
});

}

return (new cljs.core.async.t_cljs$core$async45246(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async45252 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45252 = (function (filter_GT_,p,ch,meta45253){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta45253 = meta45253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45254,meta45253__$1){
var self__ = this;
var _45254__$1 = this;
return (new cljs.core.async.t_cljs$core$async45252(self__.filter_GT_,self__.p,self__.ch,meta45253__$1));
});

cljs.core.async.t_cljs$core$async45252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45254){
var self__ = this;
var _45254__$1 = this;
return self__.meta45253;
});

cljs.core.async.t_cljs$core$async45252.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async45252.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45252.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45252.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async45252.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45252.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async45252.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async45252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45253","meta45253",1332805415,null)], null);
});

cljs.core.async.t_cljs$core$async45252.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45252";

cljs.core.async.t_cljs$core$async45252.cljs$lang$ctorPrWriter = (function (this__39001__auto__,writer__39002__auto__,opt__39003__auto__){
return cljs.core._write.call(null,writer__39002__auto__,"cljs.core.async/t_cljs$core$async45252");
});

cljs.core.async.__GT_t_cljs$core$async45252 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45252(filter_GT___$1,p__$1,ch__$1,meta45253){
return (new cljs.core.async.t_cljs$core$async45252(filter_GT___$1,p__$1,ch__$1,meta45253));
});

}

return (new cljs.core.async.t_cljs$core$async45252(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args45255 = [];
var len__39470__auto___45299 = arguments.length;
var i__39471__auto___45300 = (0);
while(true){
if((i__39471__auto___45300 < len__39470__auto___45299)){
args45255.push((arguments[i__39471__auto___45300]));

var G__45301 = (i__39471__auto___45300 + (1));
i__39471__auto___45300 = G__45301;
continue;
} else {
}
break;
}

var G__45257 = args45255.length;
switch (G__45257) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45255.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43031__auto___45303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43031__auto___45303,out){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (c__43031__auto___45303,out){
return (function (state_45278){
var state_val_45279 = (state_45278[(1)]);
if((state_val_45279 === (7))){
var inst_45274 = (state_45278[(2)]);
var state_45278__$1 = state_45278;
var statearr_45280_45304 = state_45278__$1;
(statearr_45280_45304[(2)] = inst_45274);

(statearr_45280_45304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (1))){
var state_45278__$1 = state_45278;
var statearr_45281_45305 = state_45278__$1;
(statearr_45281_45305[(2)] = null);

(statearr_45281_45305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (4))){
var inst_45260 = (state_45278[(7)]);
var inst_45260__$1 = (state_45278[(2)]);
var inst_45261 = (inst_45260__$1 == null);
var state_45278__$1 = (function (){var statearr_45282 = state_45278;
(statearr_45282[(7)] = inst_45260__$1);

return statearr_45282;
})();
if(cljs.core.truth_(inst_45261)){
var statearr_45283_45306 = state_45278__$1;
(statearr_45283_45306[(1)] = (5));

} else {
var statearr_45284_45307 = state_45278__$1;
(statearr_45284_45307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (6))){
var inst_45260 = (state_45278[(7)]);
var inst_45265 = p.call(null,inst_45260);
var state_45278__$1 = state_45278;
if(cljs.core.truth_(inst_45265)){
var statearr_45285_45308 = state_45278__$1;
(statearr_45285_45308[(1)] = (8));

} else {
var statearr_45286_45309 = state_45278__$1;
(statearr_45286_45309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (3))){
var inst_45276 = (state_45278[(2)]);
var state_45278__$1 = state_45278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45278__$1,inst_45276);
} else {
if((state_val_45279 === (2))){
var state_45278__$1 = state_45278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45278__$1,(4),ch);
} else {
if((state_val_45279 === (11))){
var inst_45268 = (state_45278[(2)]);
var state_45278__$1 = state_45278;
var statearr_45287_45310 = state_45278__$1;
(statearr_45287_45310[(2)] = inst_45268);

(statearr_45287_45310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (9))){
var state_45278__$1 = state_45278;
var statearr_45288_45311 = state_45278__$1;
(statearr_45288_45311[(2)] = null);

(statearr_45288_45311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (5))){
var inst_45263 = cljs.core.async.close_BANG_.call(null,out);
var state_45278__$1 = state_45278;
var statearr_45289_45312 = state_45278__$1;
(statearr_45289_45312[(2)] = inst_45263);

(statearr_45289_45312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (10))){
var inst_45271 = (state_45278[(2)]);
var state_45278__$1 = (function (){var statearr_45290 = state_45278;
(statearr_45290[(8)] = inst_45271);

return statearr_45290;
})();
var statearr_45291_45313 = state_45278__$1;
(statearr_45291_45313[(2)] = null);

(statearr_45291_45313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45279 === (8))){
var inst_45260 = (state_45278[(7)]);
var state_45278__$1 = state_45278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45278__$1,(11),out,inst_45260);
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
});})(c__43031__auto___45303,out))
;
return ((function (switch__42919__auto__,c__43031__auto___45303,out){
return (function() {
var cljs$core$async$state_machine__42920__auto__ = null;
var cljs$core$async$state_machine__42920__auto____0 = (function (){
var statearr_45295 = [null,null,null,null,null,null,null,null,null];
(statearr_45295[(0)] = cljs$core$async$state_machine__42920__auto__);

(statearr_45295[(1)] = (1));

return statearr_45295;
});
var cljs$core$async$state_machine__42920__auto____1 = (function (state_45278){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_45278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e45296){if((e45296 instanceof Object)){
var ex__42923__auto__ = e45296;
var statearr_45297_45314 = state_45278;
(statearr_45297_45314[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45315 = state_45278;
state_45278 = G__45315;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
cljs$core$async$state_machine__42920__auto__ = function(state_45278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42920__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42920__auto____1.call(this,state_45278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42920__auto____0;
cljs$core$async$state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42920__auto____1;
return cljs$core$async$state_machine__42920__auto__;
})()
;})(switch__42919__auto__,c__43031__auto___45303,out))
})();
var state__43033__auto__ = (function (){var statearr_45298 = f__43032__auto__.call(null);
(statearr_45298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto___45303);

return statearr_45298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(c__43031__auto___45303,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args45316 = [];
var len__39470__auto___45319 = arguments.length;
var i__39471__auto___45320 = (0);
while(true){
if((i__39471__auto___45320 < len__39470__auto___45319)){
args45316.push((arguments[i__39471__auto___45320]));

var G__45321 = (i__39471__auto___45320 + (1));
i__39471__auto___45320 = G__45321;
continue;
} else {
}
break;
}

var G__45318 = args45316.length;
switch (G__45318) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45316.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__43031__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43031__auto__){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (c__43031__auto__){
return (function (state_45488){
var state_val_45489 = (state_45488[(1)]);
if((state_val_45489 === (7))){
var inst_45484 = (state_45488[(2)]);
var state_45488__$1 = state_45488;
var statearr_45490_45531 = state_45488__$1;
(statearr_45490_45531[(2)] = inst_45484);

(statearr_45490_45531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45489 === (20))){
var inst_45454 = (state_45488[(7)]);
var inst_45465 = (state_45488[(2)]);
var inst_45466 = cljs.core.next.call(null,inst_45454);
var inst_45440 = inst_45466;
var inst_45441 = null;
var inst_45442 = (0);
var inst_45443 = (0);
var state_45488__$1 = (function (){var statearr_45491 = state_45488;
(statearr_45491[(8)] = inst_45443);

(statearr_45491[(9)] = inst_45440);

(statearr_45491[(10)] = inst_45442);

(statearr_45491[(11)] = inst_45441);

(statearr_45491[(12)] = inst_45465);

return statearr_45491;
})();
var statearr_45492_45532 = state_45488__$1;
(statearr_45492_45532[(2)] = null);

(statearr_45492_45532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45489 === (1))){
var state_45488__$1 = state_45488;
var statearr_45493_45533 = state_45488__$1;
(statearr_45493_45533[(2)] = null);

(statearr_45493_45533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45489 === (4))){
var inst_45429 = (state_45488[(13)]);
var inst_45429__$1 = (state_45488[(2)]);
var inst_45430 = (inst_45429__$1 == null);
var state_45488__$1 = (function (){var statearr_45494 = state_45488;
(statearr_45494[(13)] = inst_45429__$1);

return statearr_45494;
})();
if(cljs.core.truth_(inst_45430)){
var statearr_45495_45534 = state_45488__$1;
(statearr_45495_45534[(1)] = (5));

} else {
var statearr_45496_45535 = state_45488__$1;
(statearr_45496_45535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45489 === (15))){
var state_45488__$1 = state_45488;
var statearr_45500_45536 = state_45488__$1;
(statearr_45500_45536[(2)] = null);

(statearr_45500_45536[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45489 === (21))){
var state_45488__$1 = state_45488;
var statearr_45501_45537 = state_45488__$1;
(statearr_45501_45537[(2)] = null);

(statearr_45501_45537[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45489 === (13))){
var inst_45443 = (state_45488[(8)]);
var inst_45440 = (state_45488[(9)]);
var inst_45442 = (state_45488[(10)]);
var inst_45441 = (state_45488[(11)]);
var inst_45450 = (state_45488[(2)]);
var inst_45451 = (inst_45443 + (1));
var tmp45497 = inst_45440;
var tmp45498 = inst_45442;
var tmp45499 = inst_45441;
var inst_45440__$1 = tmp45497;
var inst_45441__$1 = tmp45499;
var inst_45442__$1 = tmp45498;
var inst_45443__$1 = inst_45451;
var state_45488__$1 = (function (){var statearr_45502 = state_45488;
(statearr_45502[(8)] = inst_45443__$1);

(statearr_45502[(9)] = inst_45440__$1);

(statearr_45502[(10)] = inst_45442__$1);

(statearr_45502[(11)] = inst_45441__$1);

(statearr_45502[(14)] = inst_45450);

return statearr_45502;
})();
var statearr_45503_45538 = state_45488__$1;
(statearr_45503_45538[(2)] = null);

(statearr_45503_45538[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45489 === (22))){
var state_45488__$1 = state_45488;
var statearr_45504_45539 = state_45488__$1;
(statearr_45504_45539[(2)] = null);

(statearr_45504_45539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45489 === (6))){
var inst_45429 = (state_45488[(13)]);
var inst_45438 = f.call(null,inst_45429);
var inst_45439 = cljs.core.seq.call(null,inst_45438);
var inst_45440 = inst_45439;
var inst_45441 = null;
var inst_45442 = (0);
var inst_45443 = (0);
var state_45488__$1 = (function (){var statearr_45505 = state_45488;
(statearr_45505[(8)] = inst_45443);

(statearr_45505[(9)] = inst_45440);

(statearr_45505[(10)] = inst_45442);

(statearr_45505[(11)] = inst_45441);

return statearr_45505;
})();
var statearr_45506_45540 = state_45488__$1;
(statearr_45506_45540[(2)] = null);

(statearr_45506_45540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45489 === (17))){
var inst_45454 = (state_45488[(7)]);
var inst_45458 = cljs.core.chunk_first.call(null,inst_45454);
var inst_45459 = cljs.core.chunk_rest.call(null,inst_45454);
var inst_45460 = cljs.core.count.call(null,inst_45458);
var inst_45440 = inst_45459;
var inst_45441 = inst_45458;
var inst_45442 = inst_45460;
var inst_45443 = (0);
var state_45488__$1 = (function (){var statearr_45507 = state_45488;
(statearr_45507[(8)] = inst_45443);

(statearr_45507[(9)] = inst_45440);

(statearr_45507[(10)] = inst_45442);

(statearr_45507[(11)] = inst_45441);

return statearr_45507;
})();
var statearr_45508_45541 = state_45488__$1;
(statearr_45508_45541[(2)] = null);

(statearr_45508_45541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45489 === (3))){
var inst_45486 = (state_45488[(2)]);
var state_45488__$1 = state_45488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45488__$1,inst_45486);
} else {
if((state_val_45489 === (12))){
var inst_45474 = (state_45488[(2)]);
var state_45488__$1 = state_45488;
var statearr_45509_45542 = state_45488__$1;
(statearr_45509_45542[(2)] = inst_45474);

(statearr_45509_45542[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45489 === (2))){
var state_45488__$1 = state_45488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45488__$1,(4),in$);
} else {
if((state_val_45489 === (23))){
var inst_45482 = (state_45488[(2)]);
var state_45488__$1 = state_45488;
var statearr_45510_45543 = state_45488__$1;
(statearr_45510_45543[(2)] = inst_45482);

(statearr_45510_45543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45489 === (19))){
var inst_45469 = (state_45488[(2)]);
var state_45488__$1 = state_45488;
var statearr_45511_45544 = state_45488__$1;
(statearr_45511_45544[(2)] = inst_45469);

(statearr_45511_45544[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45489 === (11))){
var inst_45454 = (state_45488[(7)]);
var inst_45440 = (state_45488[(9)]);
var inst_45454__$1 = cljs.core.seq.call(null,inst_45440);
var state_45488__$1 = (function (){var statearr_45512 = state_45488;
(statearr_45512[(7)] = inst_45454__$1);

return statearr_45512;
})();
if(inst_45454__$1){
var statearr_45513_45545 = state_45488__$1;
(statearr_45513_45545[(1)] = (14));

} else {
var statearr_45514_45546 = state_45488__$1;
(statearr_45514_45546[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45489 === (9))){
var inst_45476 = (state_45488[(2)]);
var inst_45477 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_45488__$1 = (function (){var statearr_45515 = state_45488;
(statearr_45515[(15)] = inst_45476);

return statearr_45515;
})();
if(cljs.core.truth_(inst_45477)){
var statearr_45516_45547 = state_45488__$1;
(statearr_45516_45547[(1)] = (21));

} else {
var statearr_45517_45548 = state_45488__$1;
(statearr_45517_45548[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45489 === (5))){
var inst_45432 = cljs.core.async.close_BANG_.call(null,out);
var state_45488__$1 = state_45488;
var statearr_45518_45549 = state_45488__$1;
(statearr_45518_45549[(2)] = inst_45432);

(statearr_45518_45549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45489 === (14))){
var inst_45454 = (state_45488[(7)]);
var inst_45456 = cljs.core.chunked_seq_QMARK_.call(null,inst_45454);
var state_45488__$1 = state_45488;
if(inst_45456){
var statearr_45519_45550 = state_45488__$1;
(statearr_45519_45550[(1)] = (17));

} else {
var statearr_45520_45551 = state_45488__$1;
(statearr_45520_45551[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45489 === (16))){
var inst_45472 = (state_45488[(2)]);
var state_45488__$1 = state_45488;
var statearr_45521_45552 = state_45488__$1;
(statearr_45521_45552[(2)] = inst_45472);

(statearr_45521_45552[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45489 === (10))){
var inst_45443 = (state_45488[(8)]);
var inst_45441 = (state_45488[(11)]);
var inst_45448 = cljs.core._nth.call(null,inst_45441,inst_45443);
var state_45488__$1 = state_45488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45488__$1,(13),out,inst_45448);
} else {
if((state_val_45489 === (18))){
var inst_45454 = (state_45488[(7)]);
var inst_45463 = cljs.core.first.call(null,inst_45454);
var state_45488__$1 = state_45488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45488__$1,(20),out,inst_45463);
} else {
if((state_val_45489 === (8))){
var inst_45443 = (state_45488[(8)]);
var inst_45442 = (state_45488[(10)]);
var inst_45445 = (inst_45443 < inst_45442);
var inst_45446 = inst_45445;
var state_45488__$1 = state_45488;
if(cljs.core.truth_(inst_45446)){
var statearr_45522_45553 = state_45488__$1;
(statearr_45522_45553[(1)] = (10));

} else {
var statearr_45523_45554 = state_45488__$1;
(statearr_45523_45554[(1)] = (11));

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
});})(c__43031__auto__))
;
return ((function (switch__42919__auto__,c__43031__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__42920__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42920__auto____0 = (function (){
var statearr_45527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45527[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42920__auto__);

(statearr_45527[(1)] = (1));

return statearr_45527;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42920__auto____1 = (function (state_45488){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_45488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e45528){if((e45528 instanceof Object)){
var ex__42923__auto__ = e45528;
var statearr_45529_45555 = state_45488;
(statearr_45529_45555[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45556 = state_45488;
state_45488 = G__45556;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42920__auto__ = function(state_45488){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42920__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42920__auto____1.call(this,state_45488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42920__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42920__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42920__auto__;
})()
;})(switch__42919__auto__,c__43031__auto__))
})();
var state__43033__auto__ = (function (){var statearr_45530 = f__43032__auto__.call(null);
(statearr_45530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto__);

return statearr_45530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(c__43031__auto__))
);

return c__43031__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args45557 = [];
var len__39470__auto___45560 = arguments.length;
var i__39471__auto___45561 = (0);
while(true){
if((i__39471__auto___45561 < len__39470__auto___45560)){
args45557.push((arguments[i__39471__auto___45561]));

var G__45562 = (i__39471__auto___45561 + (1));
i__39471__auto___45561 = G__45562;
continue;
} else {
}
break;
}

var G__45559 = args45557.length;
switch (G__45559) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45557.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args45564 = [];
var len__39470__auto___45567 = arguments.length;
var i__39471__auto___45568 = (0);
while(true){
if((i__39471__auto___45568 < len__39470__auto___45567)){
args45564.push((arguments[i__39471__auto___45568]));

var G__45569 = (i__39471__auto___45568 + (1));
i__39471__auto___45568 = G__45569;
continue;
} else {
}
break;
}

var G__45566 = args45564.length;
switch (G__45566) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45564.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args45571 = [];
var len__39470__auto___45622 = arguments.length;
var i__39471__auto___45623 = (0);
while(true){
if((i__39471__auto___45623 < len__39470__auto___45622)){
args45571.push((arguments[i__39471__auto___45623]));

var G__45624 = (i__39471__auto___45623 + (1));
i__39471__auto___45623 = G__45624;
continue;
} else {
}
break;
}

var G__45573 = args45571.length;
switch (G__45573) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45571.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43031__auto___45626 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43031__auto___45626,out){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (c__43031__auto___45626,out){
return (function (state_45597){
var state_val_45598 = (state_45597[(1)]);
if((state_val_45598 === (7))){
var inst_45592 = (state_45597[(2)]);
var state_45597__$1 = state_45597;
var statearr_45599_45627 = state_45597__$1;
(statearr_45599_45627[(2)] = inst_45592);

(statearr_45599_45627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45598 === (1))){
var inst_45574 = null;
var state_45597__$1 = (function (){var statearr_45600 = state_45597;
(statearr_45600[(7)] = inst_45574);

return statearr_45600;
})();
var statearr_45601_45628 = state_45597__$1;
(statearr_45601_45628[(2)] = null);

(statearr_45601_45628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45598 === (4))){
var inst_45577 = (state_45597[(8)]);
var inst_45577__$1 = (state_45597[(2)]);
var inst_45578 = (inst_45577__$1 == null);
var inst_45579 = cljs.core.not.call(null,inst_45578);
var state_45597__$1 = (function (){var statearr_45602 = state_45597;
(statearr_45602[(8)] = inst_45577__$1);

return statearr_45602;
})();
if(inst_45579){
var statearr_45603_45629 = state_45597__$1;
(statearr_45603_45629[(1)] = (5));

} else {
var statearr_45604_45630 = state_45597__$1;
(statearr_45604_45630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45598 === (6))){
var state_45597__$1 = state_45597;
var statearr_45605_45631 = state_45597__$1;
(statearr_45605_45631[(2)] = null);

(statearr_45605_45631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45598 === (3))){
var inst_45594 = (state_45597[(2)]);
var inst_45595 = cljs.core.async.close_BANG_.call(null,out);
var state_45597__$1 = (function (){var statearr_45606 = state_45597;
(statearr_45606[(9)] = inst_45594);

return statearr_45606;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45597__$1,inst_45595);
} else {
if((state_val_45598 === (2))){
var state_45597__$1 = state_45597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45597__$1,(4),ch);
} else {
if((state_val_45598 === (11))){
var inst_45577 = (state_45597[(8)]);
var inst_45586 = (state_45597[(2)]);
var inst_45574 = inst_45577;
var state_45597__$1 = (function (){var statearr_45607 = state_45597;
(statearr_45607[(10)] = inst_45586);

(statearr_45607[(7)] = inst_45574);

return statearr_45607;
})();
var statearr_45608_45632 = state_45597__$1;
(statearr_45608_45632[(2)] = null);

(statearr_45608_45632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45598 === (9))){
var inst_45577 = (state_45597[(8)]);
var state_45597__$1 = state_45597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45597__$1,(11),out,inst_45577);
} else {
if((state_val_45598 === (5))){
var inst_45577 = (state_45597[(8)]);
var inst_45574 = (state_45597[(7)]);
var inst_45581 = cljs.core._EQ_.call(null,inst_45577,inst_45574);
var state_45597__$1 = state_45597;
if(inst_45581){
var statearr_45610_45633 = state_45597__$1;
(statearr_45610_45633[(1)] = (8));

} else {
var statearr_45611_45634 = state_45597__$1;
(statearr_45611_45634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45598 === (10))){
var inst_45589 = (state_45597[(2)]);
var state_45597__$1 = state_45597;
var statearr_45612_45635 = state_45597__$1;
(statearr_45612_45635[(2)] = inst_45589);

(statearr_45612_45635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45598 === (8))){
var inst_45574 = (state_45597[(7)]);
var tmp45609 = inst_45574;
var inst_45574__$1 = tmp45609;
var state_45597__$1 = (function (){var statearr_45613 = state_45597;
(statearr_45613[(7)] = inst_45574__$1);

return statearr_45613;
})();
var statearr_45614_45636 = state_45597__$1;
(statearr_45614_45636[(2)] = null);

(statearr_45614_45636[(1)] = (2));


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
});})(c__43031__auto___45626,out))
;
return ((function (switch__42919__auto__,c__43031__auto___45626,out){
return (function() {
var cljs$core$async$state_machine__42920__auto__ = null;
var cljs$core$async$state_machine__42920__auto____0 = (function (){
var statearr_45618 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45618[(0)] = cljs$core$async$state_machine__42920__auto__);

(statearr_45618[(1)] = (1));

return statearr_45618;
});
var cljs$core$async$state_machine__42920__auto____1 = (function (state_45597){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_45597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e45619){if((e45619 instanceof Object)){
var ex__42923__auto__ = e45619;
var statearr_45620_45637 = state_45597;
(statearr_45620_45637[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45638 = state_45597;
state_45597 = G__45638;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
cljs$core$async$state_machine__42920__auto__ = function(state_45597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42920__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42920__auto____1.call(this,state_45597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42920__auto____0;
cljs$core$async$state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42920__auto____1;
return cljs$core$async$state_machine__42920__auto__;
})()
;})(switch__42919__auto__,c__43031__auto___45626,out))
})();
var state__43033__auto__ = (function (){var statearr_45621 = f__43032__auto__.call(null);
(statearr_45621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto___45626);

return statearr_45621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(c__43031__auto___45626,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args45639 = [];
var len__39470__auto___45709 = arguments.length;
var i__39471__auto___45710 = (0);
while(true){
if((i__39471__auto___45710 < len__39470__auto___45709)){
args45639.push((arguments[i__39471__auto___45710]));

var G__45711 = (i__39471__auto___45710 + (1));
i__39471__auto___45710 = G__45711;
continue;
} else {
}
break;
}

var G__45641 = args45639.length;
switch (G__45641) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45639.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43031__auto___45713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43031__auto___45713,out){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (c__43031__auto___45713,out){
return (function (state_45679){
var state_val_45680 = (state_45679[(1)]);
if((state_val_45680 === (7))){
var inst_45675 = (state_45679[(2)]);
var state_45679__$1 = state_45679;
var statearr_45681_45714 = state_45679__$1;
(statearr_45681_45714[(2)] = inst_45675);

(statearr_45681_45714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45680 === (1))){
var inst_45642 = (new Array(n));
var inst_45643 = inst_45642;
var inst_45644 = (0);
var state_45679__$1 = (function (){var statearr_45682 = state_45679;
(statearr_45682[(7)] = inst_45643);

(statearr_45682[(8)] = inst_45644);

return statearr_45682;
})();
var statearr_45683_45715 = state_45679__$1;
(statearr_45683_45715[(2)] = null);

(statearr_45683_45715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45680 === (4))){
var inst_45647 = (state_45679[(9)]);
var inst_45647__$1 = (state_45679[(2)]);
var inst_45648 = (inst_45647__$1 == null);
var inst_45649 = cljs.core.not.call(null,inst_45648);
var state_45679__$1 = (function (){var statearr_45684 = state_45679;
(statearr_45684[(9)] = inst_45647__$1);

return statearr_45684;
})();
if(inst_45649){
var statearr_45685_45716 = state_45679__$1;
(statearr_45685_45716[(1)] = (5));

} else {
var statearr_45686_45717 = state_45679__$1;
(statearr_45686_45717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45680 === (15))){
var inst_45669 = (state_45679[(2)]);
var state_45679__$1 = state_45679;
var statearr_45687_45718 = state_45679__$1;
(statearr_45687_45718[(2)] = inst_45669);

(statearr_45687_45718[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45680 === (13))){
var state_45679__$1 = state_45679;
var statearr_45688_45719 = state_45679__$1;
(statearr_45688_45719[(2)] = null);

(statearr_45688_45719[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45680 === (6))){
var inst_45644 = (state_45679[(8)]);
var inst_45665 = (inst_45644 > (0));
var state_45679__$1 = state_45679;
if(cljs.core.truth_(inst_45665)){
var statearr_45689_45720 = state_45679__$1;
(statearr_45689_45720[(1)] = (12));

} else {
var statearr_45690_45721 = state_45679__$1;
(statearr_45690_45721[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45680 === (3))){
var inst_45677 = (state_45679[(2)]);
var state_45679__$1 = state_45679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45679__$1,inst_45677);
} else {
if((state_val_45680 === (12))){
var inst_45643 = (state_45679[(7)]);
var inst_45667 = cljs.core.vec.call(null,inst_45643);
var state_45679__$1 = state_45679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45679__$1,(15),out,inst_45667);
} else {
if((state_val_45680 === (2))){
var state_45679__$1 = state_45679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45679__$1,(4),ch);
} else {
if((state_val_45680 === (11))){
var inst_45659 = (state_45679[(2)]);
var inst_45660 = (new Array(n));
var inst_45643 = inst_45660;
var inst_45644 = (0);
var state_45679__$1 = (function (){var statearr_45691 = state_45679;
(statearr_45691[(7)] = inst_45643);

(statearr_45691[(8)] = inst_45644);

(statearr_45691[(10)] = inst_45659);

return statearr_45691;
})();
var statearr_45692_45722 = state_45679__$1;
(statearr_45692_45722[(2)] = null);

(statearr_45692_45722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45680 === (9))){
var inst_45643 = (state_45679[(7)]);
var inst_45657 = cljs.core.vec.call(null,inst_45643);
var state_45679__$1 = state_45679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45679__$1,(11),out,inst_45657);
} else {
if((state_val_45680 === (5))){
var inst_45647 = (state_45679[(9)]);
var inst_45643 = (state_45679[(7)]);
var inst_45652 = (state_45679[(11)]);
var inst_45644 = (state_45679[(8)]);
var inst_45651 = (inst_45643[inst_45644] = inst_45647);
var inst_45652__$1 = (inst_45644 + (1));
var inst_45653 = (inst_45652__$1 < n);
var state_45679__$1 = (function (){var statearr_45693 = state_45679;
(statearr_45693[(12)] = inst_45651);

(statearr_45693[(11)] = inst_45652__$1);

return statearr_45693;
})();
if(cljs.core.truth_(inst_45653)){
var statearr_45694_45723 = state_45679__$1;
(statearr_45694_45723[(1)] = (8));

} else {
var statearr_45695_45724 = state_45679__$1;
(statearr_45695_45724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45680 === (14))){
var inst_45672 = (state_45679[(2)]);
var inst_45673 = cljs.core.async.close_BANG_.call(null,out);
var state_45679__$1 = (function (){var statearr_45697 = state_45679;
(statearr_45697[(13)] = inst_45672);

return statearr_45697;
})();
var statearr_45698_45725 = state_45679__$1;
(statearr_45698_45725[(2)] = inst_45673);

(statearr_45698_45725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45680 === (10))){
var inst_45663 = (state_45679[(2)]);
var state_45679__$1 = state_45679;
var statearr_45699_45726 = state_45679__$1;
(statearr_45699_45726[(2)] = inst_45663);

(statearr_45699_45726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45680 === (8))){
var inst_45643 = (state_45679[(7)]);
var inst_45652 = (state_45679[(11)]);
var tmp45696 = inst_45643;
var inst_45643__$1 = tmp45696;
var inst_45644 = inst_45652;
var state_45679__$1 = (function (){var statearr_45700 = state_45679;
(statearr_45700[(7)] = inst_45643__$1);

(statearr_45700[(8)] = inst_45644);

return statearr_45700;
})();
var statearr_45701_45727 = state_45679__$1;
(statearr_45701_45727[(2)] = null);

(statearr_45701_45727[(1)] = (2));


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
});})(c__43031__auto___45713,out))
;
return ((function (switch__42919__auto__,c__43031__auto___45713,out){
return (function() {
var cljs$core$async$state_machine__42920__auto__ = null;
var cljs$core$async$state_machine__42920__auto____0 = (function (){
var statearr_45705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45705[(0)] = cljs$core$async$state_machine__42920__auto__);

(statearr_45705[(1)] = (1));

return statearr_45705;
});
var cljs$core$async$state_machine__42920__auto____1 = (function (state_45679){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_45679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e45706){if((e45706 instanceof Object)){
var ex__42923__auto__ = e45706;
var statearr_45707_45728 = state_45679;
(statearr_45707_45728[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45729 = state_45679;
state_45679 = G__45729;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
cljs$core$async$state_machine__42920__auto__ = function(state_45679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42920__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42920__auto____1.call(this,state_45679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42920__auto____0;
cljs$core$async$state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42920__auto____1;
return cljs$core$async$state_machine__42920__auto__;
})()
;})(switch__42919__auto__,c__43031__auto___45713,out))
})();
var state__43033__auto__ = (function (){var statearr_45708 = f__43032__auto__.call(null);
(statearr_45708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto___45713);

return statearr_45708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(c__43031__auto___45713,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args45730 = [];
var len__39470__auto___45804 = arguments.length;
var i__39471__auto___45805 = (0);
while(true){
if((i__39471__auto___45805 < len__39470__auto___45804)){
args45730.push((arguments[i__39471__auto___45805]));

var G__45806 = (i__39471__auto___45805 + (1));
i__39471__auto___45805 = G__45806;
continue;
} else {
}
break;
}

var G__45732 = args45730.length;
switch (G__45732) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45730.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__43031__auto___45808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43031__auto___45808,out){
return (function (){
var f__43032__auto__ = (function (){var switch__42919__auto__ = ((function (c__43031__auto___45808,out){
return (function (state_45774){
var state_val_45775 = (state_45774[(1)]);
if((state_val_45775 === (7))){
var inst_45770 = (state_45774[(2)]);
var state_45774__$1 = state_45774;
var statearr_45776_45809 = state_45774__$1;
(statearr_45776_45809[(2)] = inst_45770);

(statearr_45776_45809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45775 === (1))){
var inst_45733 = [];
var inst_45734 = inst_45733;
var inst_45735 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45774__$1 = (function (){var statearr_45777 = state_45774;
(statearr_45777[(7)] = inst_45734);

(statearr_45777[(8)] = inst_45735);

return statearr_45777;
})();
var statearr_45778_45810 = state_45774__$1;
(statearr_45778_45810[(2)] = null);

(statearr_45778_45810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45775 === (4))){
var inst_45738 = (state_45774[(9)]);
var inst_45738__$1 = (state_45774[(2)]);
var inst_45739 = (inst_45738__$1 == null);
var inst_45740 = cljs.core.not.call(null,inst_45739);
var state_45774__$1 = (function (){var statearr_45779 = state_45774;
(statearr_45779[(9)] = inst_45738__$1);

return statearr_45779;
})();
if(inst_45740){
var statearr_45780_45811 = state_45774__$1;
(statearr_45780_45811[(1)] = (5));

} else {
var statearr_45781_45812 = state_45774__$1;
(statearr_45781_45812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45775 === (15))){
var inst_45764 = (state_45774[(2)]);
var state_45774__$1 = state_45774;
var statearr_45782_45813 = state_45774__$1;
(statearr_45782_45813[(2)] = inst_45764);

(statearr_45782_45813[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45775 === (13))){
var state_45774__$1 = state_45774;
var statearr_45783_45814 = state_45774__$1;
(statearr_45783_45814[(2)] = null);

(statearr_45783_45814[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45775 === (6))){
var inst_45734 = (state_45774[(7)]);
var inst_45759 = inst_45734.length;
var inst_45760 = (inst_45759 > (0));
var state_45774__$1 = state_45774;
if(cljs.core.truth_(inst_45760)){
var statearr_45784_45815 = state_45774__$1;
(statearr_45784_45815[(1)] = (12));

} else {
var statearr_45785_45816 = state_45774__$1;
(statearr_45785_45816[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45775 === (3))){
var inst_45772 = (state_45774[(2)]);
var state_45774__$1 = state_45774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45774__$1,inst_45772);
} else {
if((state_val_45775 === (12))){
var inst_45734 = (state_45774[(7)]);
var inst_45762 = cljs.core.vec.call(null,inst_45734);
var state_45774__$1 = state_45774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45774__$1,(15),out,inst_45762);
} else {
if((state_val_45775 === (2))){
var state_45774__$1 = state_45774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45774__$1,(4),ch);
} else {
if((state_val_45775 === (11))){
var inst_45738 = (state_45774[(9)]);
var inst_45742 = (state_45774[(10)]);
var inst_45752 = (state_45774[(2)]);
var inst_45753 = [];
var inst_45754 = inst_45753.push(inst_45738);
var inst_45734 = inst_45753;
var inst_45735 = inst_45742;
var state_45774__$1 = (function (){var statearr_45786 = state_45774;
(statearr_45786[(7)] = inst_45734);

(statearr_45786[(11)] = inst_45752);

(statearr_45786[(12)] = inst_45754);

(statearr_45786[(8)] = inst_45735);

return statearr_45786;
})();
var statearr_45787_45817 = state_45774__$1;
(statearr_45787_45817[(2)] = null);

(statearr_45787_45817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45775 === (9))){
var inst_45734 = (state_45774[(7)]);
var inst_45750 = cljs.core.vec.call(null,inst_45734);
var state_45774__$1 = state_45774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45774__$1,(11),out,inst_45750);
} else {
if((state_val_45775 === (5))){
var inst_45738 = (state_45774[(9)]);
var inst_45742 = (state_45774[(10)]);
var inst_45735 = (state_45774[(8)]);
var inst_45742__$1 = f.call(null,inst_45738);
var inst_45743 = cljs.core._EQ_.call(null,inst_45742__$1,inst_45735);
var inst_45744 = cljs.core.keyword_identical_QMARK_.call(null,inst_45735,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_45745 = (inst_45743) || (inst_45744);
var state_45774__$1 = (function (){var statearr_45788 = state_45774;
(statearr_45788[(10)] = inst_45742__$1);

return statearr_45788;
})();
if(cljs.core.truth_(inst_45745)){
var statearr_45789_45818 = state_45774__$1;
(statearr_45789_45818[(1)] = (8));

} else {
var statearr_45790_45819 = state_45774__$1;
(statearr_45790_45819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45775 === (14))){
var inst_45767 = (state_45774[(2)]);
var inst_45768 = cljs.core.async.close_BANG_.call(null,out);
var state_45774__$1 = (function (){var statearr_45792 = state_45774;
(statearr_45792[(13)] = inst_45767);

return statearr_45792;
})();
var statearr_45793_45820 = state_45774__$1;
(statearr_45793_45820[(2)] = inst_45768);

(statearr_45793_45820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45775 === (10))){
var inst_45757 = (state_45774[(2)]);
var state_45774__$1 = state_45774;
var statearr_45794_45821 = state_45774__$1;
(statearr_45794_45821[(2)] = inst_45757);

(statearr_45794_45821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45775 === (8))){
var inst_45738 = (state_45774[(9)]);
var inst_45734 = (state_45774[(7)]);
var inst_45742 = (state_45774[(10)]);
var inst_45747 = inst_45734.push(inst_45738);
var tmp45791 = inst_45734;
var inst_45734__$1 = tmp45791;
var inst_45735 = inst_45742;
var state_45774__$1 = (function (){var statearr_45795 = state_45774;
(statearr_45795[(14)] = inst_45747);

(statearr_45795[(7)] = inst_45734__$1);

(statearr_45795[(8)] = inst_45735);

return statearr_45795;
})();
var statearr_45796_45822 = state_45774__$1;
(statearr_45796_45822[(2)] = null);

(statearr_45796_45822[(1)] = (2));


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
});})(c__43031__auto___45808,out))
;
return ((function (switch__42919__auto__,c__43031__auto___45808,out){
return (function() {
var cljs$core$async$state_machine__42920__auto__ = null;
var cljs$core$async$state_machine__42920__auto____0 = (function (){
var statearr_45800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45800[(0)] = cljs$core$async$state_machine__42920__auto__);

(statearr_45800[(1)] = (1));

return statearr_45800;
});
var cljs$core$async$state_machine__42920__auto____1 = (function (state_45774){
while(true){
var ret_value__42921__auto__ = (function (){try{while(true){
var result__42922__auto__ = switch__42919__auto__.call(null,state_45774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42922__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42922__auto__;
}
break;
}
}catch (e45801){if((e45801 instanceof Object)){
var ex__42923__auto__ = e45801;
var statearr_45802_45823 = state_45774;
(statearr_45802_45823[(5)] = ex__42923__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45824 = state_45774;
state_45774 = G__45824;
continue;
} else {
return ret_value__42921__auto__;
}
break;
}
});
cljs$core$async$state_machine__42920__auto__ = function(state_45774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42920__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42920__auto____1.call(this,state_45774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42920__auto____0;
cljs$core$async$state_machine__42920__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42920__auto____1;
return cljs$core$async$state_machine__42920__auto__;
})()
;})(switch__42919__auto__,c__43031__auto___45808,out))
})();
var state__43033__auto__ = (function (){var statearr_45803 = f__43032__auto__.call(null);
(statearr_45803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43031__auto___45808);

return statearr_45803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43033__auto__);
});})(c__43031__auto___45808,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1466122640498