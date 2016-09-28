// Compiled by ClojureScript 1.9.36 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('cljsjs.react');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

/**
 * @interface
 */
om.core.IDisplayName = function(){};

om.core.display_name = (function om$core$display_name(this$){
if((!((this$ == null))) && (!((this$.om$core$IDisplayName$display_name$arity$1 == null)))){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core.display_name[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$);
} else {
var m__39059__auto____$1 = (om.core.display_name["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IInitState = function(){};

om.core.init_state = (function om$core$init_state(this$){
if((!((this$ == null))) && (!((this$.om$core$IInitState$init_state$arity$1 == null)))){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core.init_state[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$);
} else {
var m__39059__auto____$1 = (om.core.init_state["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IShouldUpdate = function(){};

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IShouldUpdate$should_update$arity$3 == null)))){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core.should_update[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$,next_props,next_state);
} else {
var m__39059__auto____$1 = (om.core.should_update["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillMount = function(){};

om.core.will_mount = (function om$core$will_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillMount$will_mount$arity$1 == null)))){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core.will_mount[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$);
} else {
var m__39059__auto____$1 = (om.core.will_mount["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidMount = function(){};

om.core.did_mount = (function om$core$did_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IDidMount$did_mount$arity$1 == null)))){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core.did_mount[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$);
} else {
var m__39059__auto____$1 = (om.core.did_mount["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUnmount = function(){};

om.core.will_unmount = (function om$core$will_unmount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillUnmount$will_unmount$arity$1 == null)))){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core.will_unmount[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$);
} else {
var m__39059__auto____$1 = (om.core.will_unmount["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUpdate = function(){};

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IWillUpdate$will_update$arity$3 == null)))){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core.will_update[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$,next_props,next_state);
} else {
var m__39059__auto____$1 = (om.core.will_update["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidUpdate = function(){};

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((!((this$ == null))) && (!((this$.om$core$IDidUpdate$did_update$arity$3 == null)))){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core.did_update[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$,prev_props,prev_state);
} else {
var m__39059__auto____$1 = (om.core.did_update["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$,prev_props,prev_state);
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillReceiveProps = function(){};

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((!((this$ == null))) && (!((this$.om$core$IWillReceiveProps$will_receive_props$arity$2 == null)))){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core.will_receive_props[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$,next_props);
} else {
var m__39059__auto____$1 = (om.core.will_receive_props["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$,next_props);
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRender = function(){};

om.core.render = (function om$core$render(this$){
if((!((this$ == null))) && (!((this$.om$core$IRender$render$arity$1 == null)))){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core.render[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$);
} else {
var m__39059__auto____$1 = (om.core.render["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderProps = function(){};

om.core.render_props = (function om$core$render_props(this$,props,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderProps$render_props$arity$3 == null)))){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core.render_props[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$,props,state);
} else {
var m__39059__auto____$1 = (om.core.render_props["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$,props,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderState = function(){};

om.core.render_state = (function om$core$render_state(this$,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderState$render_state$arity$2 == null)))){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core.render_state[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$,state);
} else {
var m__39059__auto____$1 = (om.core.render_state["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.ICheckState = function(){};


/**
 * @interface
 */
om.core.IOmSwap = function(){};

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((!((this$ == null))) && (!((this$.om$core$IOmSwap$_om_swap_BANG_$arity$5 == null)))){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$,cursor,korks,f,tag);
} else {
var m__39059__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IGetState = function(){};

om.core._get_state = (function om$core$_get_state(var_args){
var args41317 = [];
var len__39470__auto___41320 = arguments.length;
var i__39471__auto___41321 = (0);
while(true){
if((i__39471__auto___41321 < len__39470__auto___41320)){
args41317.push((arguments[i__39471__auto___41321]));

var G__41322 = (i__39471__auto___41321 + (1));
i__39471__auto___41321 = G__41322;
continue;
} else {
}
break;
}

var G__41319 = args41317.length;
switch (G__41319) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41317.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$1 == null)))){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core._get_state[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$);
} else {
var m__39059__auto____$1 = (om.core._get_state["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$2 == null)))){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core._get_state[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$,ks);
} else {
var m__39059__auto____$1 = (om.core._get_state["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
om.core.IGetRenderState = function(){};

om.core._get_render_state = (function om$core$_get_render_state(var_args){
var args41324 = [];
var len__39470__auto___41327 = arguments.length;
var i__39471__auto___41328 = (0);
while(true){
if((i__39471__auto___41328 < len__39470__auto___41327)){
args41324.push((arguments[i__39471__auto___41328]));

var G__41329 = (i__39471__auto___41328 + (1));
i__39471__auto___41328 = G__41329;
continue;
} else {
}
break;
}

var G__41326 = args41324.length;
switch (G__41326) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41324.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$1 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core._get_render_state[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$);
} else {
var m__39059__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$2 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core._get_render_state[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$,ks);
} else {
var m__39059__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
om.core.ISetState = function(){};

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(var_args){
var args41331 = [];
var len__39470__auto___41334 = arguments.length;
var i__39471__auto___41335 = (0);
while(true){
if((i__39471__auto___41335 < len__39470__auto___41334)){
args41331.push((arguments[i__39471__auto___41335]));

var G__41336 = (i__39471__auto___41335 + (1));
i__39471__auto___41335 = G__41336;
continue;
} else {
}
break;
}

var G__41333 = args41331.length;
switch (G__41333) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41331.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$3 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$,val,render);
} else {
var m__39059__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$4 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$,ks,val,render);
} else {
var m__39059__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$,ks,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;



/**
 * @interface
 */
om.core.IRenderQueue = function(){};

om.core._get_queue = (function om$core$_get_queue(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_get_queue$arity$1 == null)))){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core._get_queue[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$);
} else {
var m__39059__auto____$1 = (om.core._get_queue["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2 == null)))){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$,c);
} else {
var m__39059__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 == null)))){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$);
} else {
var m__39059__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IValue = function(){};

om.core._value = (function om$core$_value(x){
if((!((x == null))) && (!((x.om$core$IValue$_value$arity$1 == null)))){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__39058__auto__ = (((x == null))?null:x);
var m__39059__auto__ = (om.core._value[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,x);
} else {
var m__39059__auto____$1 = (om.core._value["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

/**
 * @interface
 */
om.core.ICursor = function(){};

om.core._path = (function om$core$_path(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_path$arity$1 == null)))){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__39058__auto__ = (((cursor == null))?null:cursor);
var m__39059__auto__ = (om.core._path[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,cursor);
} else {
var m__39059__auto____$1 = (om.core._path["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
}
});

om.core._state = (function om$core$_state(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_state$arity$1 == null)))){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__39058__auto__ = (((cursor == null))?null:cursor);
var m__39059__auto__ = (om.core._state[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,cursor);
} else {
var m__39059__auto____$1 = (om.core._state["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IToCursor = function(){};

om.core._to_cursor = (function om$core$_to_cursor(var_args){
var args41338 = [];
var len__39470__auto___41341 = arguments.length;
var i__39471__auto___41342 = (0);
while(true){
if((i__39471__auto___41342 < len__39470__auto___41341)){
args41338.push((arguments[i__39471__auto___41342]));

var G__41343 = (i__39471__auto___41342 + (1));
i__39471__auto___41342 = G__41343;
continue;
} else {
}
break;
}

var G__41340 = args41338.length;
switch (G__41340) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41338.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$2 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__39058__auto__ = (((value == null))?null:value);
var m__39059__auto__ = (om.core._to_cursor[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,value,state);
} else {
var m__39059__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,value,state);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$3 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__39058__auto__ = (((value == null))?null:value);
var m__39059__auto__ = (om.core._to_cursor[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,value,state,path);
} else {
var m__39059__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,value,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;



/**
 * @interface
 */
om.core.ICursorDerive = function(){};

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((!((cursor == null))) && (!((cursor.om$core$ICursorDerive$_derive$arity$4 == null)))){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__39058__auto__ = (((cursor == null))?null:cursor);
var m__39059__auto__ = (om.core._derive[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,cursor,derived,state,path);
} else {
var m__39059__auto____$1 = (om.core._derive["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,cursor,derived,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function om$core$path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state.call(null,cursor);
});

/**
 * @interface
 */
om.core.ITransact = function(){};

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((!((cursor == null))) && (!((cursor.om$core$ITransact$_transact_BANG_$arity$4 == null)))){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__39058__auto__ = (((cursor == null))?null:cursor);
var m__39059__auto__ = (om.core._transact_BANG_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,cursor,korks,f,tag);
} else {
var m__39059__auto____$1 = (om.core._transact_BANG_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.INotify = function(){};

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((!((x == null))) && (!((x.om$core$INotify$_listen_BANG_$arity$3 == null)))){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__39058__auto__ = (((x == null))?null:x);
var m__39059__auto__ = (om.core._listen_BANG_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,x,key,tx_listen);
} else {
var m__39059__auto____$1 = (om.core._listen_BANG_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,x,key,tx_listen);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((!((x == null))) && (!((x.om$core$INotify$_unlisten_BANG_$arity$2 == null)))){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__39058__auto__ = (((x == null))?null:x);
var m__39059__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,x,key);
} else {
var m__39059__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,x,key);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((!((x == null))) && (!((x.om$core$INotify$_notify_BANG_$arity$3 == null)))){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__39058__auto__ = (((x == null))?null:x);
var m__39059__auto__ = (om.core._notify_BANG_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,x,tx_data,root_cursor);
} else {
var m__39059__auto____$1 = (om.core._notify_BANG_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,x,tx_data,root_cursor);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
}
});


/**
 * @interface
 */
om.core.IRootProperties = function(){};

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_set_property_BANG_$arity$4 == null)))){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$,id,p,val);
} else {
var m__39059__auto____$1 = (om.core._set_property_BANG_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$,id,p,val);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_property_BANG_$arity$3 == null)))){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$,id,p);
} else {
var m__39059__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2 == null)))){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$,id);
} else {
var m__39059__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$,id);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_get_property$arity$3 == null)))){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core._get_property[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$,id,p);
} else {
var m__39059__auto____$1 = (om.core._get_property["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRootKey = function(){};

om.core._root_key = (function om$core$_root_key(cursor){
if((!((cursor == null))) && (!((cursor.om$core$IRootKey$_root_key$arity$1 == null)))){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__39058__auto__ = (((cursor == null))?null:cursor);
var m__39059__auto__ = (om.core._root_key[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,cursor);
} else {
var m__39059__auto____$1 = (om.core._root_key["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IAdapt = function(){};

om.core._adapt = (function om$core$_adapt(this$,other){
if((!((this$ == null))) && (!((this$.om$core$IAdapt$_adapt$arity$2 == null)))){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core._adapt[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$,other);
} else {
var m__39059__auto____$1 = (om.core._adapt["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$,other);
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt.call(null,x,other);
});

/**
 * @interface
 */
om.core.IOmRef = function(){};

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_add_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$,c);
} else {
var m__39059__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_remove_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$,c);
} else {
var m__39059__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1 == null)))){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$);
} else {
var m__39059__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_get_deps$arity$1 == null)))){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__39058__auto__ = (((this$ == null))?null:this$);
var m__39059__auto__ = (om.core._get_deps[goog.typeOf(x__39058__auto__)]);
if(!((m__39059__auto__ == null))){
return m__39059__auto__.call(null,this$);
} else {
var m__39059__auto____$1 = (om.core._get_deps["_"]);
if(!((m__39059__auto____$1 == null))){
return m__39059__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
}
});

om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = ((((!((state == null)))?(((false) || (state.om$core$IOmSwap$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state)))?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ICursor$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(var_args){
var args41349 = [];
var len__39470__auto___41353 = arguments.length;
var i__39471__auto___41354 = (0);
while(true){
if((i__39471__auto___41354 < len__39470__auto___41353)){
args41349.push((arguments[i__39471__auto___41354]));

var G__41355 = (i__39471__auto___41354 + (1));
i__39471__auto___41354 = G__41355;
continue;
} else {
}
break;
}

var G__41351 = args41349.length;
switch (G__41351) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41349.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error("Assert failed: (component? x)"));
}

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error("Assert failed: (component? x)"));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__41352 = (x.props["__om_cursor"]);
if(cljs.core.seq.call(null,korks__$1)){
return cljs.core.get_in.call(null,G__41352,korks__$1);
} else {
return G__41352;
}
});

om.core.get_props.cljs$lang$maxFixedArity = 2;

/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(var_args){
var args41357 = [];
var len__39470__auto___41360 = arguments.length;
var i__39471__auto___41361 = (0);
while(true){
if((i__39471__auto___41361 < len__39470__auto___41360)){
args41357.push((arguments[i__39471__auto___41361]));

var G__41362 = (i__39471__auto___41361 + (1));
i__39471__auto___41361 = G__41362;
continue;
} else {
}
break;
}

var G__41359 = args41357.length;
switch (G__41359) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41357.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._get_state.call(null,owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;

/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(var_args){
var args41364 = [];
var len__39470__auto___41367 = arguments.length;
var i__39471__auto___41368 = (0);
while(true){
if((i__39471__auto___41368 < len__39470__auto___41367)){
args41364.push((arguments[i__39471__auto___41368]));

var G__41369 = (i__39471__auto___41368 + (1));
i__39471__auto___41368 = G__41369;
continue;
} else {
}
break;
}

var G__41366 = args41364.length;
switch (G__41366) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41364.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,om.core.get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return om.core.get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,om.core.get_shared.call(null,owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;

om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4657__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4657__auto__)){
var pending_state = temp__4657__auto__;
var G__41372 = state;
(G__41372["__om_prev_state"] = (state["__om_state"]));

(G__41372["__om_state"] = pending_state);

(G__41372["__om_pending_state"] = null);

return G__41372;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(var_args){
var args41373 = [];
var len__39470__auto___41376 = arguments.length;
var i__39471__auto___41377 = (0);
while(true){
if((i__39471__auto___41377 < len__39470__auto___41376)){
args41373.push((arguments[i__39471__auto___41377]));

var G__41378 = (i__39471__auto___41377 + (1));
i__39471__auto___41377 = G__41378;
continue;
} else {
}
break;
}

var G__41375 = args41373.length;
switch (G__41375) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41373.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.call(null,owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__38395__auto__ = props;
if(cljs.core.truth_(or__38395__auto__)){
return or__38395__auto__;
} else {
return owner.props;
}
})();
var temp__4657__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4657__auto__)){
var props_state = temp__4657__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__38395__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__38395__auto__)){
return or__38395__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;

om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_41402 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__38395__auto__ = (state_41402["__om_prev_state"]);
if(cljs.core.truth_(or__38395__auto__)){
return or__38395__auto__;
} else {
return (state_41402["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4657__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4657__auto__){
var refs = temp__4657__auto__;
var seq__41383 = cljs.core.seq.call(null,refs);
var chunk__41384 = null;
var count__41385 = (0);
var i__41386 = (0);
while(true){
if((i__41386 < count__41385)){
var ref = cljs.core._nth.call(null,chunk__41384,i__41386);
om.core.unobserve.call(null,this$,ref);

var G__41403 = seq__41383;
var G__41404 = chunk__41384;
var G__41405 = count__41385;
var G__41406 = (i__41386 + (1));
seq__41383 = G__41403;
chunk__41384 = G__41404;
count__41385 = G__41405;
i__41386 = G__41406;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__41383);
if(temp__4657__auto____$1){
var seq__41383__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41383__$1)){
var c__39206__auto__ = cljs.core.chunk_first.call(null,seq__41383__$1);
var G__41407 = cljs.core.chunk_rest.call(null,seq__41383__$1);
var G__41408 = c__39206__auto__;
var G__41409 = cljs.core.count.call(null,c__39206__auto__);
var G__41410 = (0);
seq__41383 = G__41407;
chunk__41384 = G__41408;
count__41385 = G__41409;
i__41386 = G__41410;
continue;
} else {
var ref = cljs.core.first.call(null,seq__41383__$1);
om.core.unobserve.call(null,this$,ref);

var G__41411 = cljs.core.next.call(null,seq__41383__$1);
var G__41412 = null;
var G__41413 = (0);
var G__41414 = (0);
seq__41383 = G__41411;
chunk__41384 = G__41412;
count__41385 = G__41413;
i__41386 = G__41414;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillReceiveProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c))){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if(((!((c == null)))?(((false) || (c.om$core$IShouldUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c))){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__38383__auto__ = om.core.cursor_QMARK_.call(null,cursor);
if(cljs.core.truth_(and__38383__auto__)){
var and__38383__auto____$1 = om.core.cursor_QMARK_.call(null,next_cursor);
if(cljs.core.truth_(and__38383__auto____$1)){
return cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor));
} else {
return and__38383__auto____$1;
}
} else {
return and__38383__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__38383__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__38383__auto__){
return cljs.core.some.call(null,((function (and__38383__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__41380_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__41380_SHARP_);
});})(and__38383__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__38383__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_41389 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_41390 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_41391 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_41392 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_41393 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if(((!((c == null)))?(((false) || (c.om$core$IRender$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c))){
return om.core.render.call(null,c);
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c))){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c))){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_41393;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_41392;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_41391;

om.core._STAR_state_STAR_ = _STAR_state_STAR_41390;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_41389;
}}),(function (next_props,next_state){
var this$ = this;
var c_41415 = om.core.children.call(null,this$);
if(((!((c_41415 == null)))?(((false) || (c_41415.om$core$IWillUpdate$))?true:(((!c_41415.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_41415):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_41415))){
var state_41416 = this$.state;
om.core.will_update.call(null,c_41415,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__38395__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__38395__auto__)){
return or__38395__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_id": (function (){var or__38395__auto__ = id;
if(cljs.core.truth_(or__38395__auto__)){
return or__38395__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.call(null,((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)))};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDisplayName$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c))){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_41417 = om.core.children.call(null,this$);
if(((!((c_41417 == null)))?(((false) || (c_41417.om$core$IWillMount$))?true:(((!c_41417.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_41417):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_41417))){
om.core.will_mount.call(null,c_41417);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x41419 = obj;
x41419.om$core$ISetState$ = true;

x41419.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x41419){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__38383__auto__ = !((app_state == null));
if(and__38383__auto__){
return render;
} else {
return and__38383__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x41419))
;

x41419.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x41419){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__38383__auto__ = !((app_state == null));
if(and__38383__auto__){
return render;
} else {
return and__38383__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x41419))
;

x41419.om$core$IGetRenderState$ = true;

x41419.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x41419){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x41419))
;

x41419.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x41419){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x41419))
;

x41419.om$core$IGetState$ = true;

x41419.om$core$IGetState$_get_state$arity$1 = ((function (x41419){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__38395__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__38395__auto__)){
return or__38395__auto__;
} else {
return (state["__om_state"]);
}
});})(x41419))
;

x41419.om$core$IGetState$_get_state$arity$2 = ((function (x41419){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x41419))
;

return x41419;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function om$core$react_id(x){
var id = goog.dom.dataset.get(om.core.get_node.call(null,x),"reactid");
if(cljs.core.truth_(id)){
} else {
throw (new Error("Assert failed: id"));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__38395__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__38395__auto__)){
return or__38395__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__38395__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__38395__auto__)){
return or__38395__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null));
(props["__om_init_state"] = null);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,om.core.state);

if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_41430 = om.core.children.call(null,this$);
if(((!((c_41430 == null)))?(((false) || (c_41430.om$core$IWillMount$))?true:(((!c_41430.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_41430):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_41430))){
om.core.will_mount.call(null,c_41430);
} else {
}

if(cljs.core.truth_(om.core.mounted_QMARK_.call(null,this$))){
return om.core.no_local_merge_pending_state.call(null,this$);
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4657__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4657__auto__){
var refs = temp__4657__auto__;
var seq__41424 = cljs.core.seq.call(null,refs);
var chunk__41425 = null;
var count__41426 = (0);
var i__41427 = (0);
while(true){
if((i__41427 < count__41426)){
var ref = cljs.core._nth.call(null,chunk__41425,i__41427);
om.core.unobserve.call(null,this$,ref);

var G__41431 = seq__41424;
var G__41432 = chunk__41425;
var G__41433 = count__41426;
var G__41434 = (i__41427 + (1));
seq__41424 = G__41431;
chunk__41425 = G__41432;
count__41426 = G__41433;
i__41427 = G__41434;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__41424);
if(temp__4657__auto____$1){
var seq__41424__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41424__$1)){
var c__39206__auto__ = cljs.core.chunk_first.call(null,seq__41424__$1);
var G__41435 = cljs.core.chunk_rest.call(null,seq__41424__$1);
var G__41436 = c__39206__auto__;
var G__41437 = cljs.core.count.call(null,c__39206__auto__);
var G__41438 = (0);
seq__41424 = G__41435;
chunk__41425 = G__41436;
count__41426 = G__41437;
i__41427 = G__41438;
continue;
} else {
var ref = cljs.core.first.call(null,seq__41424__$1);
om.core.unobserve.call(null,this$,ref);

var G__41439 = cljs.core.next.call(null,seq__41424__$1);
var G__41440 = null;
var G__41441 = (0);
var G__41442 = (0);
seq__41424 = G__41439;
chunk__41425 = G__41440;
count__41426 = G__41441;
i__41427 = G__41442;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_41443 = this$.props;
var c_41444 = om.core.children.call(null,this$);
if(((!((c_41444 == null)))?(((false) || (c_41444.om$core$IWillUpdate$))?true:(((!c_41444.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_41444):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_41444))){
var state_41445 = this$.state;
om.core.will_update.call(null,c_41444,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_41446 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__38395__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__38395__auto__)){
return or__38395__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x41448 = cljs.core.clj__GT_js.call(null,methods$);
x41448.om$core$ISetState$ = true;

x41448.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x41448){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__38383__auto__ = !((gstate == null));
if(and__38383__auto__){
return render;
} else {
return and__38383__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x41448))
;

x41448.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x41448){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x41448))
;

x41448.om$core$IGetRenderState$ = true;

x41448.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x41448){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x41448))
;

x41448.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x41448){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x41448))
;

x41448.om$core$IGetState$ = true;

x41448.om$core$IGetState$_get_state$arity$1 = ((function (x41448){
return (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(om.core.mounted_QMARK_.call(null,this$__$1))){
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__38395__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__38395__auto__)){
return or__38395__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
} else {
return (this$__$1.props["__om_init_state"]);
}
});})(x41448))
;

x41448.om$core$IGetState$_get_state$arity$2 = ((function (x41448){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x41448))
;

return x41448;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if(((!((x == null)))?(((false) || (x.om$core$ICursor$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x))){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__41452){
var vec__41453 = p__41452;
var k = cljs.core.nth.call(null,vec__41453,(0),null);
var v = cljs.core.nth.call(null,vec__41453,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__41456 = null;
var G__41456__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__41456__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__41456 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__41456__2.call(this,self__,k);
case 3:
return G__41456__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41456.cljs$core$IFn$_invoke$arity$2 = G__41456__2;
G__41456.cljs$core$IFn$_invoke$arity$3 = G__41456__3;
return G__41456;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args41451){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args41451)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__39001__auto__,writer__39002__auto__,opt__39003__auto__){
return cljs.core._write.call(null,writer__39002__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__41458 = null;
var G__41458__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__41458__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__41458 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__41458__2.call(this,self__,k);
case 3:
return G__41458__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41458.cljs$core$IFn$_invoke$arity$2 = G__41458__2;
G__41458.cljs$core$IFn$_invoke$arity$3 = G__41458__3;
return G__41458;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args41457){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args41457)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__39001__auto__,writer__39002__auto__,opt__39003__auto__){
return cljs.core._write.call(null,writer__39002__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x41460 = cljs.core.clone.call(null,val);
x41460.cljs$core$IDeref$ = true;

x41460.cljs$core$IDeref$_deref$arity$1 = ((function (x41460){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x41460))
;

x41460.om$core$ICursor$ = true;

x41460.om$core$ICursor$_path$arity$1 = ((function (x41460){
return (function (_){
var ___$1 = this;
return path;
});})(x41460))
;

x41460.om$core$ICursor$_state$arity$1 = ((function (x41460){
return (function (_){
var ___$1 = this;
return state;
});})(x41460))
;

x41460.om$core$ITransact$ = true;

x41460.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x41460){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x41460))
;

x41460.cljs$core$IEquiv$ = true;

x41460.cljs$core$IEquiv$_equiv$arity$2 = ((function (x41460){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x41460))
;

return x41460;
});
om.core.to_cursor = (function om$core$to_cursor(var_args){
var args41461 = [];
var len__39470__auto___41466 = arguments.length;
var i__39471__auto___41467 = (0);
while(true){
if((i__39471__auto___41467 < len__39470__auto___41466)){
args41461.push((arguments[i__39471__auto___41467]));

var G__41468 = (i__39471__auto___41467 + (1));
i__39471__auto___41467 = G__41468;
continue;
} else {
}
break;
}

var G__41463 = args41461.length;
switch (G__41463) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41461.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,val))){
return val;
} else {
if(((!((val == null)))?(((false) || (val.om$core$IToCursor$))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val))){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if(((!((val == null)))?((((val.cljs$lang$protocol_mask$partition1$ & (8192))) || (val.cljs$core$ICloneable$))?true:(((!val.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val))){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;

om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});


/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if(((!((atom == null)))?((((atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (atom.cljs$core$IDeref$))?true:(((!atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom))){
} else {
throw (new Error("Assert failed: (satisfies? IDeref atom)"));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x41473 = cljs.core.clone.call(null,x);
x41473.cljs$core$ICloneable$ = true;

x41473.cljs$core$ICloneable$_clone$arity$1 = ((function (x41473){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x41473))
;

x41473.om$core$IAdapt$ = true;

x41473.om$core$IAdapt$_adapt$arity$2 = ((function (x41473){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x41473))
;

x41473.om$core$ICursorDerive$ = true;

x41473.om$core$ICursorDerive$_derive$arity$4 = ((function (x41473){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x41473))
;

x41473.om$core$ITransact$ = true;

x41473.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x41473){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x41473))
;

return x41473;
});
om.core.ref_cursor_QMARK_ = (function om$core$ref_cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$IOmRef$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,x);
}
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 *   properties and methods of the cursor. Reference cursors may be
 *   observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_.call(null,cursor))){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x41481 = cljs.core.clone.call(null,cursor);
x41481.om$core$ICursorDerive$ = true;

x41481.om$core$ICursorDerive$_derive$arity$4 = ((function (x41481,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x41481,path,storage))
;

x41481.om$core$IOmRef$ = true;

x41481.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x41481,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x41481,path,storage))
;

x41481.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x41481,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x41481,path,storage))
;

x41481.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x41481,path,storage){
return (function (_){
var ___$1 = this;
var seq__41482 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__41483 = null;
var count__41484 = (0);
var i__41485 = (0);
while(true){
if((i__41485 < count__41484)){
var c = cljs.core._nth.call(null,chunk__41483,i__41485);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__41486 = seq__41482;
var G__41487 = chunk__41483;
var G__41488 = count__41484;
var G__41489 = (i__41485 + (1));
seq__41482 = G__41486;
chunk__41483 = G__41487;
count__41484 = G__41488;
i__41485 = G__41489;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41482);
if(temp__4657__auto__){
var seq__41482__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41482__$1)){
var c__39206__auto__ = cljs.core.chunk_first.call(null,seq__41482__$1);
var G__41490 = cljs.core.chunk_rest.call(null,seq__41482__$1);
var G__41491 = c__39206__auto__;
var G__41492 = cljs.core.count.call(null,c__39206__auto__);
var G__41493 = (0);
seq__41482 = G__41490;
chunk__41483 = G__41491;
count__41484 = G__41492;
i__41485 = G__41493;
continue;
} else {
var c = cljs.core.first.call(null,seq__41482__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__41494 = cljs.core.next.call(null,seq__41482__$1);
var G__41495 = null;
var G__41496 = (0);
var G__41497 = (0);
seq__41482 = G__41494;
chunk__41483 = G__41495;
count__41484 = G__41496;
i__41485 = G__41497;
continue;
}
} else {
return null;
}
}
break;
}
});})(x41481,path,storage))
;

x41481.om$core$IOmRef$_get_deps$arity$1 = ((function (x41481,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x41481,path,storage))
;

x41481.om$core$ITransact$ = true;

x41481.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x41481,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x41481,path,storage))
;

return x41481;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__38395__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__38395__auto__)){
return or__38395__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 *   the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (component? c)"));
}

if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,ref))){
} else {
throw (new Error("Assert failed: (cursor? ref)"));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_.call(null,ref))){
} else {
throw (new Error("Assert failed: (ref-cursor? ref)"));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function om$core$get_renderT(state){
var or__38395__auto__ = state.om$render$T;
if(cljs.core.truth_(or__38395__auto__)){
return or__38395__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 *   never recommended.
 */
om.core.render_all = (function om$core$render_all(var_args){
var args41498 = [];
var len__39470__auto___41505 = arguments.length;
var i__39471__auto___41506 = (0);
while(true){
if((i__39471__auto___41506 < len__39470__auto___41505)){
args41498.push((arguments[i__39471__auto___41506]));

var G__41507 = (i__39471__auto___41506 + (1));
i__39471__auto___41506 = G__41507;
continue;
} else {
}
break;
}

var G__41500 = args41498.length;
switch (G__41500) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41498.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.call(null,null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__41501_41509 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__41502_41510 = null;
var count__41503_41511 = (0);
var i__41504_41512 = (0);
while(true){
if((i__41504_41512 < count__41503_41511)){
var f_41513 = cljs.core._nth.call(null,chunk__41502_41510,i__41504_41512);
f_41513.call(null);

var G__41514 = seq__41501_41509;
var G__41515 = chunk__41502_41510;
var G__41516 = count__41503_41511;
var G__41517 = (i__41504_41512 + (1));
seq__41501_41509 = G__41514;
chunk__41502_41510 = G__41515;
count__41503_41511 = G__41516;
i__41504_41512 = G__41517;
continue;
} else {
var temp__4657__auto___41518 = cljs.core.seq.call(null,seq__41501_41509);
if(temp__4657__auto___41518){
var seq__41501_41519__$1 = temp__4657__auto___41518;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41501_41519__$1)){
var c__39206__auto___41520 = cljs.core.chunk_first.call(null,seq__41501_41519__$1);
var G__41521 = cljs.core.chunk_rest.call(null,seq__41501_41519__$1);
var G__41522 = c__39206__auto___41520;
var G__41523 = cljs.core.count.call(null,c__39206__auto___41520);
var G__41524 = (0);
seq__41501_41509 = G__41521;
chunk__41502_41510 = G__41522;
count__41503_41511 = G__41523;
i__41504_41512 = G__41524;
continue;
} else {
var f_41525 = cljs.core.first.call(null,seq__41501_41519__$1);
f_41525.call(null);

var G__41526 = cljs.core.next.call(null,seq__41501_41519__$1);
var G__41527 = null;
var G__41528 = (0);
var G__41529 = (0);
seq__41501_41509 = G__41526;
chunk__41502_41510 = G__41527;
count__41503_41511 = G__41528;
i__41504_41512 = G__41529;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;

om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__38395__auto__ = ((!((x == null)))?(((false) || (x.om$core$IRender$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x));
if(or__38395__auto__){
return or__38395__auto__;
} else {
var or__38395__auto____$1 = ((!((x == null)))?(((false) || (x.om$core$IRenderProps$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x));
if(or__38395__auto____$1){
return or__38395__auto____$1;
} else {
if(!((x == null))){
if((false) || (x.om$core$IRenderState$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str("(or (satisfies? IRender x) (satisfies? IRenderProps x) (satisfies? IRenderState x))")].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(var_args){
var args41540 = [];
var len__39470__auto___41543 = arguments.length;
var i__39471__auto___41544 = (0);
while(true){
if((i__39471__auto___41544 < len__39470__auto___41543)){
args41540.push((arguments[i__39471__auto___41544]));

var G__41545 = (i__39471__auto___41544 + (1));
i__39471__auto___41544 = G__41545;
continue;
} else {
}
break;
}

var G__41542 = args41540.length;
switch (G__41542) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41540.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.call(null,f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
var rdesc_41547 = (function (){var or__38395__auto__ = descriptor;
if(cljs.core.truth_(or__38395__auto__)){
return or__38395__auto__;
} else {
var or__38395__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__38395__auto____$1)){
return or__38395__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
if(((goog.object.get(f,"om$descriptor") == null)) || (!((rdesc_41547 === goog.object.get(f,"om$tag"))))){
var factory_41548 = React.createFactory(React.createClass(rdesc_41547));
goog.object.set(f,"om$descriptor",factory_41548);

goog.object.set(f,"om$tag",rdesc_41547);
} else {
}

return goog.object.get(f,"om$descriptor");
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;

om.core.getf = (function om$core$getf(var_args){
var args41549 = [];
var len__39470__auto___41552 = arguments.length;
var i__39471__auto___41553 = (0);
while(true){
if((i__39471__auto___41553 < len__39470__auto___41552)){
args41549.push((arguments[i__39471__auto___41553]));

var G__41554 = (i__39471__auto___41553 + (1));
i__39471__auto___41553 = G__41554;
continue;
} else {
}
break;
}

var G__41551 = args41549.length;
switch (G__41551) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41549.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;

om.core.build_STAR_ = (function om$core$build_STAR_(var_args){
var args41556 = [];
var len__39470__auto___41561 = arguments.length;
var i__39471__auto___41562 = (0);
while(true){
if((i__39471__auto___41562 < len__39470__auto___41561)){
args41556.push((arguments[i__39471__auto___41562]));

var G__41563 = (i__39471__auto___41562 + (1));
i__39471__auto___41562 = G__41563;
continue;
} else {
}
break;
}

var G__41558 = args41556.length;
switch (G__41558) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41556.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.call(null,f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str("(valid-opts? m)")].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,{"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
});
} else {
var map__41559 = m;
var map__41559__$1 = ((((!((map__41559 == null)))?((((map__41559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41559):map__41559);
var key = cljs.core.get.call(null,map__41559__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_fn = cljs.core.get.call(null,map__41559__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var state = cljs.core.get.call(null,map__41559__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var init_state = cljs.core.get.call(null,map__41559__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var opts = cljs.core.get.call(null,map__41559__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4655__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4655__auto__)){
var i = temp__4655__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__38395__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__38395__auto__)){
return or__38395__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__41559,map__41559__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__41559,map__41559__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__41559,map__41559__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__41559,map__41559__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__38395__auto__ = rkey;
if(cljs.core.truth_(or__38395__auto__)){
return or__38395__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 *   :key        - a keyword that should be used to look up the key used by
 *                 React itself when rendering sequential things.
 *   :react-key  - an explicit react key
 *   :fn         - a function to apply to the data before invoking f.
 *   :init-state - a map of initial state to pass to the component.
 *   :state      - a map of state to pass to the component, will be merged in.
 *   :opts       - a map of values. Can be used to pass side information down
 *                 the render tree.
 *   :descriptor - a JS object of React methods, will be used to
 *                 construct a React class per Om component function
 *                 encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 *   (build list-of-gadgets x
 *      {:init-state {:event-chan ...
 *                    :narble ...}})
 *   
 */
om.core.build = (function om$core$build(var_args){
var args41565 = [];
var len__39470__auto___41568 = arguments.length;
var i__39471__auto___41569 = (0);
while(true){
if((i__39471__auto___41569 < len__39470__auto___41568)){
args41565.push((arguments[i__39471__auto___41569]));

var G__41570 = (i__39471__auto___41569 + (1));
i__39471__auto___41569 = G__41570;
continue;
} else {
}
break;
}

var G__41567 = args41565.length;
switch (G__41567) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41565.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.call(null,f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;

/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(var_args){
var args41572 = [];
var len__39470__auto___41575 = arguments.length;
var i__39471__auto___41576 = (0);
while(true){
if((i__39471__auto___41576 < len__39470__auto___41575)){
args41572.push((arguments[i__39471__auto___41576]));

var G__41577 = (i__39471__auto___41576 + (1));
i__39471__auto___41576 = G__41577;
continue;
} else {
}
break;
}

var G__41574 = args41572.length;
switch (G__41574) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41572.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.call(null,f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});

om.core.build_all.cljs$lang$maxFixedArity = 3;

om.core.setup = (function om$core$setup(state,key,tx_listen){
if(((!((state == null)))?(((false) || (state.om$core$INotify$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state))){
} else {
var properties_41603 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_41604 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_41605 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x41592_41606 = state;
x41592_41606.om$core$IRootProperties$ = true;

x41592_41606.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x41592_41606,properties_41603,listeners_41604,render_queue_41605){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_41603,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x41592_41606,properties_41603,listeners_41604,render_queue_41605))
;

x41592_41606.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x41592_41606,properties_41603,listeners_41604,render_queue_41605){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_41603,cljs.core.dissoc,id,k);
});})(x41592_41606,properties_41603,listeners_41604,render_queue_41605))
;

x41592_41606.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x41592_41606,properties_41603,listeners_41604,render_queue_41605){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_41603,cljs.core.dissoc,id);
});})(x41592_41606,properties_41603,listeners_41604,render_queue_41605))
;

x41592_41606.om$core$IRootProperties$_get_property$arity$3 = ((function (x41592_41606,properties_41603,listeners_41604,render_queue_41605){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_41603),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x41592_41606,properties_41603,listeners_41604,render_queue_41605))
;

x41592_41606.om$core$INotify$ = true;

x41592_41606.om$core$INotify$_listen_BANG_$arity$3 = ((function (x41592_41606,properties_41603,listeners_41604,render_queue_41605){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_41604,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x41592_41606,properties_41603,listeners_41604,render_queue_41605))
;

x41592_41606.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x41592_41606,properties_41603,listeners_41604,render_queue_41605){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_41604,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x41592_41606,properties_41603,listeners_41604,render_queue_41605))
;

x41592_41606.om$core$INotify$_notify_BANG_$arity$3 = ((function (x41592_41606,properties_41603,listeners_41604,render_queue_41605){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__41593_41607 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_41604));
var chunk__41594_41608 = null;
var count__41595_41609 = (0);
var i__41596_41610 = (0);
while(true){
if((i__41596_41610 < count__41595_41609)){
var vec__41597_41611 = cljs.core._nth.call(null,chunk__41594_41608,i__41596_41610);
var __41612 = cljs.core.nth.call(null,vec__41597_41611,(0),null);
var f_41613 = cljs.core.nth.call(null,vec__41597_41611,(1),null);
f_41613.call(null,tx_data,root_cursor);

var G__41614 = seq__41593_41607;
var G__41615 = chunk__41594_41608;
var G__41616 = count__41595_41609;
var G__41617 = (i__41596_41610 + (1));
seq__41593_41607 = G__41614;
chunk__41594_41608 = G__41615;
count__41595_41609 = G__41616;
i__41596_41610 = G__41617;
continue;
} else {
var temp__4657__auto___41618 = cljs.core.seq.call(null,seq__41593_41607);
if(temp__4657__auto___41618){
var seq__41593_41619__$1 = temp__4657__auto___41618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41593_41619__$1)){
var c__39206__auto___41620 = cljs.core.chunk_first.call(null,seq__41593_41619__$1);
var G__41621 = cljs.core.chunk_rest.call(null,seq__41593_41619__$1);
var G__41622 = c__39206__auto___41620;
var G__41623 = cljs.core.count.call(null,c__39206__auto___41620);
var G__41624 = (0);
seq__41593_41607 = G__41621;
chunk__41594_41608 = G__41622;
count__41595_41609 = G__41623;
i__41596_41610 = G__41624;
continue;
} else {
var vec__41600_41625 = cljs.core.first.call(null,seq__41593_41619__$1);
var __41626 = cljs.core.nth.call(null,vec__41600_41625,(0),null);
var f_41627 = cljs.core.nth.call(null,vec__41600_41625,(1),null);
f_41627.call(null,tx_data,root_cursor);

var G__41628 = cljs.core.next.call(null,seq__41593_41619__$1);
var G__41629 = null;
var G__41630 = (0);
var G__41631 = (0);
seq__41593_41607 = G__41628;
chunk__41594_41608 = G__41629;
count__41595_41609 = G__41630;
i__41596_41610 = G__41631;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x41592_41606,properties_41603,listeners_41604,render_queue_41605))
;

x41592_41606.om$core$IRenderQueue$ = true;

x41592_41606.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x41592_41606,properties_41603,listeners_41604,render_queue_41605){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_41605);
});})(x41592_41606,properties_41603,listeners_41604,render_queue_41605))
;

x41592_41606.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x41592_41606,properties_41603,listeners_41604,render_queue_41605){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_41605),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_41605,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x41592_41606,properties_41603,listeners_41604,render_queue_41605))
;

x41592_41606.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x41592_41606,properties_41603,listeners_41604,render_queue_41605){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_41605,cljs.core.empty);
});})(x41592_41606,properties_41603,listeners_41604,render_queue_41605))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
var x41633 = cljs.core.clone.call(null,cursor);
x41633.cljs$core$ICloneable$ = true;

x41633.cljs$core$ICloneable$_clone$arity$1 = ((function (x41633){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x41633))
;

x41633.om$core$IAdapt$ = true;

x41633.om$core$IAdapt$_adapt$arity$2 = ((function (x41633){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x41633))
;

x41633.om$core$IRootKey$ = true;

x41633.om$core$IRootKey$_root_key$arity$1 = ((function (x41633){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x41633))
;

return x41633;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element. 
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 *               take 2 arguments - the first a map containing the
 *               path, old and new state at path, old and new global
 *               state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 *               intercept all calls to om.core/build. This function should
 *               correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 *               false setTimeout will be use. If given a function
 *               will be invoked instead.
 * 
 * Example:
 * 
 * (root
 *   (fn [data owner]
 *     ...)
 *   {:message :hello}
 *   {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__41634){
var map__41722 = p__41634;
var map__41722__$1 = ((((!((map__41722 == null)))?((((map__41722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41722):map__41722);
var options = map__41722__$1;
var target = cljs.core.get.call(null,map__41722__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tx_listen = cljs.core.get.call(null,map__41722__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var path = cljs.core.get.call(null,map__41722__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var instrument = cljs.core.get.call(null,map__41722__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var descriptor = cljs.core.get.call(null,map__41722__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var adapt = cljs.core.get.call(null,map__41722__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var raf = cljs.core.get.call(null,map__41722__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str("(ifn? f)")].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str("(not (nil? target))")].join('')));
}

var roots_SINGLEQUOTE__41809 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__41809,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__41809,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = ((((!((value == null)))?((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || (value.cljs$core$IAtom$))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value)))?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__38395__auto__ = adapt;
if(cljs.core.truth_(or__38395__auto__)){
return or__38395__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__41722,map__41722__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

var c_41810 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_41767 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_41768 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_41769 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_41770 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_41770;

om.core._STAR_state_STAR_ = _STAR_state_STAR_41769;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_41768;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_41767;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_41810);
} else {
}
}

var queue_41811 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_41811)){
} else {
var seq__41771_41812 = cljs.core.seq.call(null,queue_41811);
var chunk__41772_41813 = null;
var count__41773_41814 = (0);
var i__41774_41815 = (0);
while(true){
if((i__41774_41815 < count__41773_41814)){
var c_41816 = cljs.core._nth.call(null,chunk__41772_41813,i__41774_41815);
if(cljs.core.truth_(c_41816.isMounted())){
var temp__4657__auto___41817 = (c_41816.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4657__auto___41817)){
var next_props_41818 = temp__4657__auto___41817;
(c_41816.props["__om_cursor"] = next_props_41818);

(c_41816.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__38395__auto__ = !((function (){var G__41776 = om.core.children.call(null,c_41816);
if(!((G__41776 == null))){
if((false) || (G__41776.om$core$ICheckState$)){
return true;
} else {
if((!G__41776.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__41776);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__41776);
}
})());
if(or__38395__auto__){
return or__38395__auto__;
} else {
return c_41816.shouldComponentUpdate(c_41816.props,c_41816.state);
}
})())){
c_41816.forceUpdate();
} else {
}
} else {
}

var G__41819 = seq__41771_41812;
var G__41820 = chunk__41772_41813;
var G__41821 = count__41773_41814;
var G__41822 = (i__41774_41815 + (1));
seq__41771_41812 = G__41819;
chunk__41772_41813 = G__41820;
count__41773_41814 = G__41821;
i__41774_41815 = G__41822;
continue;
} else {
var temp__4657__auto___41823 = cljs.core.seq.call(null,seq__41771_41812);
if(temp__4657__auto___41823){
var seq__41771_41824__$1 = temp__4657__auto___41823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41771_41824__$1)){
var c__39206__auto___41825 = cljs.core.chunk_first.call(null,seq__41771_41824__$1);
var G__41826 = cljs.core.chunk_rest.call(null,seq__41771_41824__$1);
var G__41827 = c__39206__auto___41825;
var G__41828 = cljs.core.count.call(null,c__39206__auto___41825);
var G__41829 = (0);
seq__41771_41812 = G__41826;
chunk__41772_41813 = G__41827;
count__41773_41814 = G__41828;
i__41774_41815 = G__41829;
continue;
} else {
var c_41830 = cljs.core.first.call(null,seq__41771_41824__$1);
if(cljs.core.truth_(c_41830.isMounted())){
var temp__4657__auto___41831__$1 = (c_41830.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4657__auto___41831__$1)){
var next_props_41832 = temp__4657__auto___41831__$1;
(c_41830.props["__om_cursor"] = next_props_41832);

(c_41830.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__38395__auto__ = !((function (){var G__41778 = om.core.children.call(null,c_41830);
if(!((G__41778 == null))){
if((false) || (G__41778.om$core$ICheckState$)){
return true;
} else {
if((!G__41778.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__41778);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__41778);
}
})());
if(or__38395__auto__){
return or__38395__auto__;
} else {
return c_41830.shouldComponentUpdate(c_41830.props,c_41830.state);
}
})())){
c_41830.forceUpdate();
} else {
}
} else {
}

var G__41833 = cljs.core.next.call(null,seq__41771_41824__$1);
var G__41834 = null;
var G__41835 = (0);
var G__41836 = (0);
seq__41771_41812 = G__41833;
chunk__41772_41813 = G__41834;
count__41773_41814 = G__41835;
i__41774_41815 = G__41836;
continue;
}
} else {
}
}
break;
}
}

var _refs_41837 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_41837)){
} else {
var seq__41779_41838 = cljs.core.seq.call(null,_refs_41837);
var chunk__41780_41839 = null;
var count__41781_41840 = (0);
var i__41782_41841 = (0);
while(true){
if((i__41782_41841 < count__41781_41840)){
var vec__41783_41842 = cljs.core._nth.call(null,chunk__41780_41839,i__41782_41841);
var path_41843__$1 = cljs.core.nth.call(null,vec__41783_41842,(0),null);
var cs_41844 = cljs.core.nth.call(null,vec__41783_41842,(1),null);
var cs_41845__$1 = cljs.core.deref.call(null,cs_41844);
var seq__41786_41846 = cljs.core.seq.call(null,cs_41845__$1);
var chunk__41787_41847 = null;
var count__41788_41848 = (0);
var i__41789_41849 = (0);
while(true){
if((i__41789_41849 < count__41788_41848)){
var vec__41790_41850 = cljs.core._nth.call(null,chunk__41787_41847,i__41789_41849);
var id_41851 = cljs.core.nth.call(null,vec__41790_41850,(0),null);
var c_41852 = cljs.core.nth.call(null,vec__41790_41850,(1),null);
if(cljs.core.truth_(c_41852.shouldComponentUpdate(c_41852.props,c_41852.state))){
c_41852.forceUpdate();
} else {
}

var G__41853 = seq__41786_41846;
var G__41854 = chunk__41787_41847;
var G__41855 = count__41788_41848;
var G__41856 = (i__41789_41849 + (1));
seq__41786_41846 = G__41853;
chunk__41787_41847 = G__41854;
count__41788_41848 = G__41855;
i__41789_41849 = G__41856;
continue;
} else {
var temp__4657__auto___41857 = cljs.core.seq.call(null,seq__41786_41846);
if(temp__4657__auto___41857){
var seq__41786_41858__$1 = temp__4657__auto___41857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41786_41858__$1)){
var c__39206__auto___41859 = cljs.core.chunk_first.call(null,seq__41786_41858__$1);
var G__41860 = cljs.core.chunk_rest.call(null,seq__41786_41858__$1);
var G__41861 = c__39206__auto___41859;
var G__41862 = cljs.core.count.call(null,c__39206__auto___41859);
var G__41863 = (0);
seq__41786_41846 = G__41860;
chunk__41787_41847 = G__41861;
count__41788_41848 = G__41862;
i__41789_41849 = G__41863;
continue;
} else {
var vec__41793_41864 = cljs.core.first.call(null,seq__41786_41858__$1);
var id_41865 = cljs.core.nth.call(null,vec__41793_41864,(0),null);
var c_41866 = cljs.core.nth.call(null,vec__41793_41864,(1),null);
if(cljs.core.truth_(c_41866.shouldComponentUpdate(c_41866.props,c_41866.state))){
c_41866.forceUpdate();
} else {
}

var G__41867 = cljs.core.next.call(null,seq__41786_41858__$1);
var G__41868 = null;
var G__41869 = (0);
var G__41870 = (0);
seq__41786_41846 = G__41867;
chunk__41787_41847 = G__41868;
count__41788_41848 = G__41869;
i__41789_41849 = G__41870;
continue;
}
} else {
}
}
break;
}

var G__41871 = seq__41779_41838;
var G__41872 = chunk__41780_41839;
var G__41873 = count__41781_41840;
var G__41874 = (i__41782_41841 + (1));
seq__41779_41838 = G__41871;
chunk__41780_41839 = G__41872;
count__41781_41840 = G__41873;
i__41782_41841 = G__41874;
continue;
} else {
var temp__4657__auto___41875 = cljs.core.seq.call(null,seq__41779_41838);
if(temp__4657__auto___41875){
var seq__41779_41876__$1 = temp__4657__auto___41875;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41779_41876__$1)){
var c__39206__auto___41877 = cljs.core.chunk_first.call(null,seq__41779_41876__$1);
var G__41878 = cljs.core.chunk_rest.call(null,seq__41779_41876__$1);
var G__41879 = c__39206__auto___41877;
var G__41880 = cljs.core.count.call(null,c__39206__auto___41877);
var G__41881 = (0);
seq__41779_41838 = G__41878;
chunk__41780_41839 = G__41879;
count__41781_41840 = G__41880;
i__41782_41841 = G__41881;
continue;
} else {
var vec__41796_41882 = cljs.core.first.call(null,seq__41779_41876__$1);
var path_41883__$1 = cljs.core.nth.call(null,vec__41796_41882,(0),null);
var cs_41884 = cljs.core.nth.call(null,vec__41796_41882,(1),null);
var cs_41885__$1 = cljs.core.deref.call(null,cs_41884);
var seq__41799_41886 = cljs.core.seq.call(null,cs_41885__$1);
var chunk__41800_41887 = null;
var count__41801_41888 = (0);
var i__41802_41889 = (0);
while(true){
if((i__41802_41889 < count__41801_41888)){
var vec__41803_41890 = cljs.core._nth.call(null,chunk__41800_41887,i__41802_41889);
var id_41891 = cljs.core.nth.call(null,vec__41803_41890,(0),null);
var c_41892 = cljs.core.nth.call(null,vec__41803_41890,(1),null);
if(cljs.core.truth_(c_41892.shouldComponentUpdate(c_41892.props,c_41892.state))){
c_41892.forceUpdate();
} else {
}

var G__41893 = seq__41799_41886;
var G__41894 = chunk__41800_41887;
var G__41895 = count__41801_41888;
var G__41896 = (i__41802_41889 + (1));
seq__41799_41886 = G__41893;
chunk__41800_41887 = G__41894;
count__41801_41888 = G__41895;
i__41802_41889 = G__41896;
continue;
} else {
var temp__4657__auto___41897__$1 = cljs.core.seq.call(null,seq__41799_41886);
if(temp__4657__auto___41897__$1){
var seq__41799_41898__$1 = temp__4657__auto___41897__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41799_41898__$1)){
var c__39206__auto___41899 = cljs.core.chunk_first.call(null,seq__41799_41898__$1);
var G__41900 = cljs.core.chunk_rest.call(null,seq__41799_41898__$1);
var G__41901 = c__39206__auto___41899;
var G__41902 = cljs.core.count.call(null,c__39206__auto___41899);
var G__41903 = (0);
seq__41799_41886 = G__41900;
chunk__41800_41887 = G__41901;
count__41801_41888 = G__41902;
i__41802_41889 = G__41903;
continue;
} else {
var vec__41806_41904 = cljs.core.first.call(null,seq__41799_41898__$1);
var id_41905 = cljs.core.nth.call(null,vec__41806_41904,(0),null);
var c_41906 = cljs.core.nth.call(null,vec__41806_41904,(1),null);
if(cljs.core.truth_(c_41906.shouldComponentUpdate(c_41906.props,c_41906.state))){
c_41906.forceUpdate();
} else {
}

var G__41907 = cljs.core.next.call(null,seq__41799_41898__$1);
var G__41908 = null;
var G__41909 = (0);
var G__41910 = (0);
seq__41799_41886 = G__41907;
chunk__41800_41887 = G__41908;
count__41801_41888 = G__41909;
i__41802_41889 = G__41910;
continue;
}
} else {
}
}
break;
}

var G__41911 = cljs.core.next.call(null,seq__41779_41876__$1);
var G__41912 = null;
var G__41913 = (0);
var G__41914 = (0);
seq__41779_41838 = G__41911;
chunk__41780_41839 = G__41912;
count__41781_41840 = G__41913;
i__41782_41841 = G__41914;
continue;
}
} else {
}
}
break;
}
}

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__41722,map__41722__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__41722,map__41722__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__41722,map__41722__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__41722,map__41722__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
,(16));
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__41722,map__41722__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__41722,map__41722__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__41722,map__41722__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__41722,map__41722__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return ReactDOM.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__41722,map__41722__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf.call(null);
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error("Assert failed: (gdom/isElement target)"));
}

var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ITransact$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 *   at the path specified by the cursor + the optional keys by applying
 *   f to the specified value in the tree. An Om re-render will be
 *   triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(var_args){
var args41917 = [];
var len__39470__auto___41920 = arguments.length;
var i__39471__auto___41921 = (0);
while(true){
if((i__39471__auto___41921 < len__39470__auto___41920)){
args41917.push((arguments[i__39471__auto___41921]));

var G__41922 = (i__39471__auto___41921 + (1));
i__39471__auto___41921 = G__41922;
continue;
} else {
}
break;
}

var G__41919 = args41917.length;
switch (G__41919) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41917.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.call(null,cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(cljs.core.truth_(om.core.transactable_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (transactable? cursor)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Like transact! but no function provided, instead a replacement
 *   value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(var_args){
var args41924 = [];
var len__39470__auto___41927 = arguments.length;
var i__39471__auto___41928 = (0);
while(true){
if((i__39471__auto___41928 < len__39470__auto___41927)){
args41924.push((arguments[i__39471__auto___41928]));

var G__41929 = (i__39471__auto___41928 + (1));
i__39471__auto___41928 = G__41929;
continue;
} else {
}
break;
}

var G__41926 = args41924.length;
switch (G__41926) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41924.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 *   create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

var key = ((((!((cursor == null)))?(((false) || (cursor.om$core$IRootKey$))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor)))?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React DOM refs. Given a owning pure node
 *   extract the DOM ref specified by name.
 */
om.core.get_node = (function om$core$get_node(var_args){
var args41933 = [];
var len__39470__auto___41937 = arguments.length;
var i__39471__auto___41938 = (0);
while(true){
if((i__39471__auto___41938 < len__39470__auto___41937)){
args41933.push((arguments[i__39471__auto___41938]));

var G__41939 = (i__39471__auto___41938 + (1));
i__39471__auto___41938 = G__41939;
continue;
} else {
}
break;
}

var G__41935 = args41933.length;
switch (G__41935) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41933.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return ReactDOM.findDOMNode(owner);
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error("Assert failed: (string? name)"));
}

var G__41936 = owner.refs;
var G__41936__$1 = (((G__41936 == null))?null:(G__41936[name]));
if((G__41936__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__41936__$1);
}
});

om.core.get_node.cljs$lang$maxFixedArity = 2;

/**
 * A helper function to get at React refs. Given an owning pure node extract
 *   the ref specified by name.
 */
om.core.get_ref = (function om$core$get_ref(owner,name){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(typeof name === 'string'){
} else {
throw (new Error("Assert failed: (string? name)"));
}

var G__41942 = owner.refs;
if((G__41942 == null)){
return null;
} else {
return goog.object.get(G__41942,name);
}
});
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(var_args){
var args41943 = [];
var len__39470__auto___41946 = arguments.length;
var i__39471__auto___41947 = (0);
while(true){
if((i__39471__auto___41947 < len__39470__auto___41946)){
args41943.push((arguments[i__39471__auto___41947]));

var G__41948 = (i__39471__auto___41947 + (1));
i__39471__auto___41947 = G__41948;
continue;
} else {
}
break;
}

var G__41945 = args41943.length;
switch (G__41945) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41943.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(var_args){
var args41950 = [];
var len__39470__auto___41953 = arguments.length;
var i__39471__auto___41954 = (0);
while(true){
if((i__39471__auto___41954 < len__39470__auto___41953)){
args41950.push((arguments[i__39471__auto___41954]));

var G__41955 = (i__39471__auto___41954 + (1));
i__39471__auto___41954 = G__41955;
continue;
} else {
}
break;
}

var G__41952 = args41950.length;
switch (G__41952) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41950.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(var_args){
var args41957 = [];
var len__39470__auto___41960 = arguments.length;
var i__39471__auto___41961 = (0);
while(true){
if((i__39471__auto___41961 < len__39470__auto___41960)){
args41957.push((arguments[i__39471__auto___41961]));

var G__41962 = (i__39471__auto___41961 + (1));
i__39471__auto___41961 = G__41962;
continue;
} else {
}
break;
}

var G__41959 = args41957.length;
switch (G__41959) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41957.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(var_args){
var args41964 = [];
var len__39470__auto___41967 = arguments.length;
var i__39471__auto___41968 = (0);
while(true){
if((i__39471__auto___41968 < len__39470__auto___41967)){
args41964.push((arguments[i__39471__auto___41968]));

var G__41969 = (i__39471__auto___41968 + (1));
i__39471__auto___41968 = G__41969;
continue;
} else {
}
break;
}

var G__41966 = args41964.length;
switch (G__41966) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41964.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(var_args){
var args41971 = [];
var len__39470__auto___41974 = arguments.length;
var i__39471__auto___41975 = (0);
while(true){
if((i__39471__auto___41975 < len__39470__auto___41974)){
args41971.push((arguments[i__39471__auto___41975]));

var G__41976 = (i__39471__auto___41975 + (1));
i__39471__auto___41975 = G__41976;
continue;
} else {
}
break;
}

var G__41973 = args41971.length;
switch (G__41973) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41971.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._get_render_state.call(null,owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=core.js.map?rel=1466122637355