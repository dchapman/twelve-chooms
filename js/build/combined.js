/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */;/*!
 * jQuery.ScrollTo
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 4/09/2012
 *
 * @projectDescription Easy element scrolling using jQuery.
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * @author Ariel Flesler
 * @version 1.4.3.1
 *
 * @id jQuery.scrollTo
 * @id jQuery.fn.scrollTo
 * @param {String, Number, DOMElement, jQuery, Object} target Where to scroll the matched elements.
 *	  The different options for target are:
 *		- A number position (will be applied to all axes).
 *		- A string position ('44', '100px', '+=90', etc ) will be applied to all axes
 *		- A jQuery/DOM element ( logically, child of the element to scroll )
 *		- A string selector, that will be relative to the element to scroll ( 'li:eq(2)', etc )
 *		- A hash { top:x, left:y }, x and y can be any kind of number/string like above.
 *		- A percentage of the container's dimension/s, for example: 50% to go to the middle.
 *		- The string 'max' for go-to-end. 
 * @param {Number, Function} duration The OVERALL length of the animation, this argument can be the settings object instead.
 * @param {Object,Function} settings Optional set of settings or the onAfter callback.
 *	 @option {String} axis Which axis must be scrolled, use 'x', 'y', 'xy' or 'yx'.
 *	 @option {Number, Function} duration The OVERALL length of the animation.
 *	 @option {String} easing The easing method for the animation.
 *	 @option {Boolean} margin If true, the margin of the target element will be deducted from the final position.
 *	 @option {Object, Number} offset Add/deduct from the end position. One number for both axes or { top:x, left:y }.
 *	 @option {Object, Number} over Add/deduct the height/width multiplied by 'over', can be { top:x, left:y } when using both axes.
 *	 @option {Boolean} queue If true, and both axis are given, the 2nd axis will only be animated after the first one ends.
 *	 @option {Function} onAfter Function to be called after the scrolling ends. 
 *	 @option {Function} onAfterFirst If queuing is activated, this function will be called after the first scrolling ends.
 * @return {jQuery} Returns the same jQuery object, for chaining.
 *
 * @desc Scroll to a fixed position
 * @example $('div').scrollTo( 340 );
 *
 * @desc Scroll relatively to the actual position
 * @example $('div').scrollTo( '+=340px', { axis:'y' } );
 *
 * @desc Scroll using a selector (relative to the scrolled element)
 * @example $('div').scrollTo( 'p.paragraph:eq(2)', 500, { easing:'swing', queue:true, axis:'xy' } );
 *
 * @desc Scroll to a DOM element (same for jQuery object)
 * @example var second_child = document.getElementById('container').firstChild.nextSibling;
 *			$('#container').scrollTo( second_child, { duration:500, axis:'x', onAfter:function(){
 *				alert('scrolled!!');																   
 *			}});
 *
 * @desc Scroll on both axes, to different values
 * @example $('div').scrollTo( { top: 300, left:'+=200' }, { axis:'xy', offset:-20 } );
 */

;(function( $ ){
	
	var $scrollTo = $.scrollTo = function( target, duration, settings ){
		$(window).scrollTo( target, duration, settings );
	};

	$scrollTo.defaults = {
		axis:'xy',
		duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1,
		limit:true
	};

	// Returns the element that needs to be animated to scroll the window.
	// Kept for backwards compatibility (specially for localScroll & serialScroll)
	$scrollTo.window = function( scope ){
		return $(window)._scrollable();
	};

	// Hack, hack, hack :)
	// Returns the real elements to scroll (supports window/iframes, documents and regular nodes)
	$.fn._scrollable = function(){
		return this.map(function(){
			var elem = this,
				isWin = !elem.nodeName || $.inArray( elem.nodeName.toLowerCase(), ['iframe','#document','html','body'] ) != -1;

				if( !isWin )
					return elem;

			var doc = (elem.contentWindow || elem).document || elem.ownerDocument || elem;
			
			return /webkit/i.test(navigator.userAgent) || doc.compatMode == 'BackCompat' ?
				doc.body : 
				doc.documentElement;
		});
	};

	$.fn.scrollTo = function( target, duration, settings ){
		if( typeof duration == 'object' ){
			settings = duration;
			duration = 0;
		}
		if( typeof settings == 'function' )
			settings = { onAfter:settings };
			
		if( target == 'max' )
			target = 9e9;
			
		settings = $.extend( {}, $scrollTo.defaults, settings );
		// Speed is still recognized for backwards compatibility
		duration = duration || settings.duration;
		// Make sure the settings are given right
		settings.queue = settings.queue && settings.axis.length > 1;
		
		if( settings.queue )
			// Let's keep the overall duration
			duration /= 2;
		settings.offset = both( settings.offset );
		settings.over = both( settings.over );

		return this._scrollable().each(function(){
			// Null target yields nothing, just like jQuery does
			if (target == null) return;

			var elem = this,
				$elem = $(elem),
				targ = target, toff, attr = {},
				win = $elem.is('html,body');

			switch( typeof targ ){
				// A number will pass the regex
				case 'number':
				case 'string':
					if( /^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ) ){
						targ = both( targ );
						// We are done
						break;
					}
					// Relative selector, no break!
					targ = $(targ,this);
					if (!targ.length) return;
				case 'object':
					// DOMElement / jQuery
					if( targ.is || targ.style )
						// Get the real position of the target 
						toff = (targ = $(targ)).offset();
			}
			$.each( settings.axis.split(''), function( i, axis ){
				var Pos	= axis == 'x' ? 'Left' : 'Top',
					pos = Pos.toLowerCase(),
					key = 'scroll' + Pos,
					old = elem[key],
					max = $scrollTo.max(elem, axis);

				if( toff ){// jQuery / DOMElement
					attr[key] = toff[pos] + ( win ? 0 : old - $elem.offset()[pos] );

					// If it's a dom element, reduce the margin
					if( settings.margin ){
						attr[key] -= parseInt(targ.css('margin'+Pos)) || 0;
						attr[key] -= parseInt(targ.css('border'+Pos+'Width')) || 0;
					}
					
					attr[key] += settings.offset[pos] || 0;
					
					if( settings.over[pos] )
						// Scroll to a fraction of its width/height
						attr[key] += targ[axis=='x'?'width':'height']() * settings.over[pos];
				}else{ 
					var val = targ[pos];
					// Handle percentage values
					attr[key] = val.slice && val.slice(-1) == '%' ? 
						parseFloat(val) / 100 * max
						: val;
				}

				// Number or 'number'
				if( settings.limit && /^\d+$/.test(attr[key]) )
					// Check the limits
					attr[key] = attr[key] <= 0 ? 0 : Math.min( attr[key], max );

				// Queueing axes
				if( !i && settings.queue ){
					// Don't waste time animating, if there's no need.
					if( old != attr[key] )
						// Intermediate animation
						animate( settings.onAfterFirst );
					// Don't animate this axis again in the next iteration.
					delete attr[key];
				}
			});

			animate( settings.onAfter );			

			function animate( callback ){
				$elem.animate( attr, duration, settings.easing, callback && function(){
					callback.call(this, target, settings);
				});
			};

		}).end();
	};
	
	// Max scrolling position, works on quirks mode
	// It only fails (not too badly) on IE, quirks mode.
	$scrollTo.max = function( elem, axis ){
		var Dim = axis == 'x' ? 'Width' : 'Height',
			scroll = 'scroll'+Dim;
		
		if( !$(elem).is('html,body') )
			return elem[scroll] - $(elem)[Dim.toLowerCase()]();
		
		var size = 'client' + Dim,
			html = elem.ownerDocument.documentElement,
			body = elem.ownerDocument.body;

		return Math.max( html[scroll], body[scroll] ) 
			 - Math.min( html[size]  , body[size]   );
	};

	function both( val ){
		return typeof val == 'object' ? val : { top:val, left:val };
	};

})( jQuery );;// Generated by CoffeeScript 1.6.2
/*
 jQuery Waypoints - v2.0.3
 Copyright (c) 2011-2013 Caleb Troughton
 Dual licensed under the MIT license and GPL license.
 https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
 */
(function () {
  var t = [].indexOf || function (t) {
    for (var e = 0, n = this.length; e < n; e++) {
      if (e in this && this[e] === t) {
        return e
      }
    }
    return-1
  }, e = [].slice;
  (function (t, e) {
    if (typeof define === "function" && define.amd) {
      return define("waypoints", ["jquery"], function (n) {
        return e(n, t)
      })
    }
    else {
      return e(t.jQuery, t)
    }
  })(this, function (n, r) {
    var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
    i = n(r);
    c = t.call(r, "ontouchstart") >= 0;
    s = {horizontal:{}, vertical:{}};
    f = 1;
    a = {};
    u = "waypoints-context-id";
    p = "resize.waypoints";
    y = "scroll.waypoints";
    v = 1;
    w = "waypoints-waypoint-ids";
    g = "waypoint";
    m = "waypoints";
    o = function () {
      function t(t) {
        var e = this;
        this.$element = t;
        this.element = t[0];
        this.didResize = false;
        this.didScroll = false;
        this.id = "context" + f++;
        this.oldScroll = {x:t.scrollLeft(), y:t.scrollTop()};
        this.waypoints = {horizontal:{}, vertical:{}};
        t.data(u, this.id);
        a[this.id] = this;
        t.bind(y, function () {
          var t;
          if (!(e.didScroll || c)) {
            e.didScroll = true;
            t = function () {
              e.doScroll();
              return e.didScroll = false
            };
            return r.setTimeout(t, n[m].settings.scrollThrottle)
          }
        });
        t.bind(p, function () {
          var t;
          if (!e.didResize) {
            e.didResize = true;
            t = function () {
              n[m]("refresh");
              return e.didResize = false
            };
            return r.setTimeout(t, n[m].settings.resizeThrottle)
          }
        })
      }

      t.prototype.doScroll = function () {
        var t, e = this;
        t = {horizontal:{newScroll:this.$element.scrollLeft(), oldScroll:this.oldScroll.x, forward:"right", backward:"left"}, vertical:{newScroll:this.$element.scrollTop(), oldScroll:this.oldScroll.y, forward:"down", backward:"up"}};
        if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
          n[m]("refresh")
        }
        n.each(t, function (t, r) {
          var i, o, l;
          l = [];
          o = r.newScroll > r.oldScroll;
          i = o ? r.forward : r.backward;
          n.each(e.waypoints[t], function (t, e) {
            var n, i;
            if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
              return l.push(e)
            }
            else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
              return l.push(e)
            }
          });
          l.sort(function (t, e) {
            return t.offset - e.offset
          });
          if (!o) {
            l.reverse()
          }
          return n.each(l, function (t, e) {
            if (e.options.continuous || t === l.length - 1) {
              return e.trigger([i])
            }
          })
        });
        return this.oldScroll = {x:t.horizontal.newScroll, y:t.vertical.newScroll}
      };
      t.prototype.refresh = function () {
        var t, e, r, i = this;
        r = n.isWindow(this.element);
        e = this.$element.offset();
        this.doScroll();
        t = {horizontal:{contextOffset:r ? 0 : e.left, contextScroll:r ? 0 : this.oldScroll.x, contextDimension:this.$element.width(), oldScroll:this.oldScroll.x, forward:"right", backward:"left", offsetProp:"left"}, vertical:{contextOffset:r ? 0 : e.top, contextScroll:r ? 0 : this.oldScroll.y, contextDimension:r ? n[m]("viewportHeight") : this.$element.height(), oldScroll:this.oldScroll.y, forward:"down", backward:"up", offsetProp:"top"}};
        return n.each(t, function (t, e) {
          return n.each(i.waypoints[t], function (t, r) {
            var i, o, l, s, f;
            i = r.options.offset;
            l = r.offset;
            o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
            if (n.isFunction(i)) {
              i = i.apply(r.element)
            }
            else if (typeof i === "string") {
              i = parseFloat(i);
              if (r.options.offset.indexOf("%") > -1) {
                i = Math.ceil(e.contextDimension * i / 100)
              }
            }
            r.offset = o - e.contextOffset + e.contextScroll - i;
            if (r.options.onlyOnScroll && l != null || !r.enabled) {
              return
            }
            if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
              return r.trigger([e.backward])
            }
            else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
              return r.trigger([e.forward])
            }
            else if (l === null && e.oldScroll >= r.offset) {
              return r.trigger([e.forward])
            }
          })
        })
      };
      t.prototype.checkEmpty = function () {
        if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
          this.$element.unbind([p, y].join(" "));
          return delete a[this.id]
        }
      };
      return t
    }();
    l = function () {
      function t(t, e, r) {
        var i, o;
        r = n.extend({}, n.fn[g].defaults, r);
        if (r.offset === "bottom-in-view") {
          r.offset = function () {
            var t;
            t = n[m]("viewportHeight");
            if (!n.isWindow(e.element)) {
              t = e.$element.height()
            }
            return t - n(this).outerHeight()
          }
        }
        this.$element = t;
        this.element = t[0];
        this.axis = r.horizontal ? "horizontal" : "vertical";
        this.callback = r.handler;
        this.context = e;
        this.enabled = r.enabled;
        this.id = "waypoints" + v++;
        this.offset = null;
        this.options = r;
        e.waypoints[this.axis][this.id] = this;
        s[this.axis][this.id] = this;
        i = (o = t.data(w)) != null ? o : [];
        i.push(this.id);
        t.data(w, i)
      }

      t.prototype.trigger = function (t) {
        if (!this.enabled) {
          return
        }
        if (this.callback != null) {
          this.callback.apply(this.element, t)
        }
        if (this.options.triggerOnce) {
          return this.destroy()
        }
      };
      t.prototype.disable = function () {
        return this.enabled = false
      };
      t.prototype.enable = function () {
        this.context.refresh();
        return this.enabled = true
      };
      t.prototype.destroy = function () {
        delete s[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty()
      };
      t.getWaypointsByElement = function (t) {
        var e, r;
        r = n(t).data(w);
        if (!r) {
          return[]
        }
        e = n.extend({}, s.horizontal, s.vertical);
        return n.map(r, function (t) {
          return e[t]
        })
      };
      return t
    }();
    d = {init:function (t, e) {
      var r;
      if (e == null) {
        e = {}
      }
      if ((r = e.handler) == null) {
        e.handler = t
      }
      this.each(function () {
        var t, r, i, s;
        t = n(this);
        i = (s = e.context) != null ? s : n.fn[g].defaults.context;
        if (!n.isWindow(i)) {
          i = t.closest(i)
        }
        i = n(i);
        r = a[i.data(u)];
        if (!r) {
          r = new o(i)
        }
        return new l(t, r, e)
      });
      n[m]("refresh");
      return this
    }, disable:function () {
      return d._invoke(this, "disable")
    }, enable:function () {
      return d._invoke(this, "enable")
    }, destroy:function () {
      return d._invoke(this, "destroy")
    }, prev:function (t, e) {
      return d._traverse.call(this, t, e, function (t, e, n) {
        if (e > 0) {
          return t.push(n[e - 1])
        }
      })
    }, next:function (t, e) {
      return d._traverse.call(this, t, e, function (t, e, n) {
        if (e < n.length - 1) {
          return t.push(n[e + 1])
        }
      })
    }, _traverse:function (t, e, i) {
      var o, l;
      if (t == null) {
        t = "vertical"
      }
      if (e == null) {
        e = r
      }
      l = h.aggregate(e);
      o = [];
      this.each(function () {
        var e;
        e = n.inArray(this, l[t]);
        return i(o, e, l[t])
      });
      return this.pushStack(o)
    }, _invoke:function (t, e) {
      t.each(function () {
        var t;
        t = l.getWaypointsByElement(this);
        return n.each(t, function (t, n) {
          n[e]();
          return true
        })
      });
      return this
    }};
    n.fn[g] = function () {
      var t, r;
      r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
      if (d[r]) {
        return d[r].apply(this, t)
      }
      else if (n.isFunction(r)) {
        return d.init.apply(this, arguments)
      }
      else if (n.isPlainObject(r)) {
        return d.init.apply(this, [null, r])
      }
      else if (!r) {
        return n.error("jQuery Waypoints needs a callback function or handler option.")
      }
      else {
        return n.error("The " + r + " method does not exist in jQuery Waypoints.")
      }
    };
    n.fn[g].defaults = {context:r, continuous:true, enabled:true, horizontal:false, offset:0, triggerOnce:false};
    h = {refresh:function () {
      return n.each(a, function (t, e) {
        return e.refresh()
      })
    }, viewportHeight:function () {
      var t;
      return(t = r.innerHeight) != null ? t : i.height()
    }, aggregate:function (t) {
      var e, r, i;
      e = s;
      if (t) {
        e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0
      }
      if (!e) {
        return[]
      }
      r = {horizontal:[], vertical:[]};
      n.each(r, function (t, i) {
        n.each(e[t], function (t, e) {
          return i.push(e)
        });
        i.sort(function (t, e) {
          return t.offset - e.offset
        });
        r[t] = n.map(i, function (t) {
          return t.element
        });
        return r[t] = n.unique(r[t])
      });
      return r
    }, above:function (t) {
      if (t == null) {
        t = r
      }
      return h._filter(t, "vertical", function (t, e) {
        return e.offset <= t.oldScroll.y
      })
    }, below:function (t) {
      if (t == null) {
        t = r
      }
      return h._filter(t, "vertical", function (t, e) {
        return e.offset > t.oldScroll.y
      })
    }, left:function (t) {
      if (t == null) {
        t = r
      }
      return h._filter(t, "horizontal", function (t, e) {
        return e.offset <= t.oldScroll.x
      })
    }, right:function (t) {
      if (t == null) {
        t = r
      }
      return h._filter(t, "horizontal", function (t, e) {
        return e.offset > t.oldScroll.x
      })
    }, enable:function () {
      return h._invoke("enable")
    }, disable:function () {
      return h._invoke("disable")
    }, destroy:function () {
      return h._invoke("destroy")
    }, extendFn:function (t, e) {
      return d[t] = e
    }, _invoke:function (t) {
      var e;
      e = n.extend({}, s.vertical, s.horizontal);
      return n.each(e, function (e, n) {
        n[t]();
        return true
      })
    }, _filter:function (t, e, r) {
      var i, o;
      i = a[n(t).data(u)];
      if (!i) {
        return[]
      }
      o = [];
      n.each(i.waypoints[e], function (t, e) {
        if (r(i, e)) {
          return o.push(e)
        }
      });
      o.sort(function (t, e) {
        return t.offset - e.offset
      });
      return n.map(o, function (t) {
        return t.element
      })
    }};
    n[m] = function () {
      var t, n;
      n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
      if (h[n]) {
        return h[n].apply(null, t)
      }
      else {
        return h.aggregate.call(null, n)
      }
    };
    n[m].settings = {resizeThrottle:100, scrollThrottle:30};
    return i.load(function () {
      return n[m]("refresh")
    })
  })
}).call(this);;$(function () {
    var TwelveChooms = (function() {

        // playlist information
        var playlists = {
            'alex': {
                name: 'Alex',
                authored: 'maria',
                author: 'jason'
            },
            'casey': {
                name: 'Casey',
                authored: 'jessica',
                author: 'danielle'
            },
            'danielle': {
                name: 'Danielle',
                authored: 'casey',
                author: 'julia'
            },
            'dj': {
                name: 'DJ',
                authored: 'julia',
                author: 'kathia'
            },
            'jason': {
                name: 'Jason',
                authored: 'alex',
                author: 'suzie'
            },
            'jeff': {
                name: 'Jeff',
                authored: 'vicky',
                author: 'jessica'
            },
            'jessica': {
                name: 'Jessica',
                authored: 'jeff',
                author: 'jeff'
            },
            'julia': {
                name: 'Julia',
                authored: 'danielle',
                author: 'dj'
            },
            'kathia': {
                name: 'Kathia',
                authored: 'dj',
                author: 'vicky'
            },
            'maria': {
                name: 'Maria',
                authored: 'suzie',
                author: 'alex'
            },
            'suzie': {
                name: 'Suzie',
                authored: 'jason',
                author: 'jason'
            },
            'vicky': {
                name: 'Vicky',
                authored: 'kathia',
                author: 'jeff'
            }

        };

        // collections of response text
        var responseChoose = [
                'CHOOSE Choose someone from the list above. Which of those dapper little fuckers do you think made this playlist?'
            ],
            responseEmpty = [
                'EMPTY You gotta guess somebody, dumdum!'
            ],
            responseTaunt = [
                'TAUNT Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'TAUNT Aliquam ultricies ornare lorem ac elementum? Donec odio tellus, ornare eu tempor nec, tincidunt in tellus.',
                'TAUNT Aenean nec ante sed dolor volutpat mattis. Pellentesque id nisi bibendum, tincidunt ligula quis, ullamcorper sem?'],
            responseIncorrect = [
                'INCORRECT Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'INCORRECT Aliquam ultricies ornare lorem ac elementum? Donec odio tellus, ornare eu tempor nec, tincidunt in tellus.',
                'INCORRECT Aenean nec ante sed dolor volutpat mattis. Pellentesque id nisi bibendum, tincidunt ligula quis, ullamcorper sem?'
            ],
            responseCorrect = [
                'CORRECT Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'CORRECT Aliquam ultricies ornare lorem ac elementum? Donec odio tellus, ornare eu tempor nec, tincidunt in tellus.',
                'CORRECT Aenean nec ante sed dolor volutpat mattis. Pellentesque id nisi bibendum, tincidunt ligula quis, ullamcorper sem?'
            ];

        var $main = $( '#page-content' ),
            $pages = $main.children( '.page' ),
            $continue = $( '.btn--continue'),
            correct = 0,
            incorrect = 0,
            pagesCount = $pages.length,
            current = 0,
            isAnimating = false,
            endCurrPage = false,
            endNextPage = false,
            animEndEventNames = {
                'WebkitAnimation' : 'webkitAnimationEnd',
                'OAnimation' : 'oAnimationEnd',
                'msAnimation' : 'MSAnimationEnd',
                'animation' : 'animationend'
            },
            animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
            support = Modernizr.cssanimations;

        var $btnBegin = $('.btn--begin'),
            $guessSelect = $('.playlist-guess__select'),
            $btnGuess = $('.btn--guess');

        function init() {
            $pages.each( function() {
                var $page = $(this),
                    isPlaylist = $page.hasClass('playlist');

                if (isPlaylist) {
                    var $notification = $page.find('.notification'),
                        chooseText = randomResponse('choose');

                    $notification.text(chooseText);
                }

                $page.data('originalClassList', $page.attr( 'class' ) );
            });

            $pages.eq( current ).addClass( 'is-current' );

            // begin experience
            $btnBegin.on('click', function() {
                var $introduction = $('#introduction');

                $introduction.addClass('is-hidden');
            });

            // change text when playlist selected
            $guessSelect.on('change', function() {
                var $notification = $(this).closest('.playlist').find('.notification'),
                    taunt = randomResponse('taunt');

                $notification.text(taunt);
            });

            $btnGuess.on('click', function() {
                var $currPlaylist = $(this).closest('.playlist');

                guessCheck($currPlaylist);
            });

            $continue.on( 'click', function() {
                if( isAnimating ) { return false; }

                nextPage();

                return true;
            });
        }

        function nextPage() {
            if( isAnimating ) { return false; }

            isAnimating = true;

            var $currPage = $pages.eq( current );

            if( current < pagesCount - 1 ) {
                ++current;
            }
            else {
                current = 0;
            }

            var $nextPage = $pages.eq( current ).addClass( 'is-current' ),
                outClass = 'move-to-top', inClass = 'move-from-bottom';

            $currPage.addClass( 'page--' + outClass ).on( animEndEventName, function() {
                $currPage.off( animEndEventName );

                endCurrPage = true;

                if( endNextPage ) { onEndAnimation( $currPage, $nextPage ); }
            } );

            $nextPage.addClass( 'page--' + inClass ).on( animEndEventName, function() {
                $nextPage.off( animEndEventName );

                endNextPage = true;

                if( endCurrPage ) { onEndAnimation( $currPage, $nextPage ); }
            } );

            if( !support ) { onEndAnimation( $currPage, $nextPage ); }

            return true;
        }

        function onEndAnimation( $outpage, $inpage ) {
            endCurrPage = false;
            endNextPage = false;

            resetPage( $outpage, $inpage );

            isAnimating = false;
        }

        function resetPage( $outpage, $inpage ) {
            $outpage.attr( 'class', $outpage.data( 'originalClassList' ) );
            $inpage.attr( 'class', $inpage.data( 'originalClassList' ) + ' is-current' );
        }

        function randomResponse(responseType) {
            var response;

            switch(responseType) {
                case 'choose':
                    response = chooseRandom(responseChoose);
                    break;
                case 'empty':
                    response = chooseRandom(responseEmpty);
                    break;
                case 'taunt':
                    response = chooseRandom(responseTaunt);
                    break;
                case 'incorrect':
                    response = chooseRandom(responseIncorrect);
                    break;
                case 'correct':
                    response = chooseRandom(responseCorrect);
                    break;
                default:
                    return false;
            }

            return response;
        }

        function guessCheck($currPlaylist) {
            var $notification = $currPlaylist.find('.notification'),
            // owner of playlist
                playlistOwner = $currPlaylist.attr('id').substring(9),
            // who you guess wrote the playlist
                guess = $currPlaylist.find('.playlist-guess__select').val(),
            // and who they actually did
                guessAuthored = playlists[guess].authored;

            if (guess) {
                var answer = guessAuthored === playlistOwner ? 'correct' : 'incorrect';

                updatePlaylist($currPlaylist, $notification, playlistOwner, answer);
                updateScore(answer);
            } else {

                var response = randomResponse('empty');
                $notification.text(response);
            }

            return true;
        }

        function updatePlaylist($currPlaylist, $notification, playlistOwner, answer) {
            var response = randomResponse(answer),
                playlistAuthor = playlists[playlistOwner].author,
                $playlistAuthor = $currPlaylist.find('.playlist__author');

            $currPlaylist.removeClass('is-unguessed is-correct is-incorrect')
                .addClass('is-' + answer);

            $notification.text(response);

            $playlistAuthor.text( playlistAuthor === 'dj' ? 'DJ' : capitaliseFirstLetter(playlistAuthor) );
        }

        function updateScore(answer) {
            if(answer === 'correct') {
                correct++;
                $('.score--correct').text(correct);
                $('.tally').text(correct);
            } else if (answer === 'incorrect') {
                incorrect++;
                $('.score--incorrect').text(incorrect);
            }
        }

        function chooseRandom(array) {
            if (!array.length) { return false; }

            var random = array[ Math.floor( Math.random() * array.length ) ];

            random = random === 0 ? 1 : random;

            return random;
        }

        function capitaliseFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        init();

        return { init : init };
    })();
});