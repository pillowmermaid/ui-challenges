import Velocity from '../lib/velocity'

/* A suite of animation methods using velocityJS for the toolbarUI
module*/
class toolbarAnimate {
	constructor() {
	}
	//Toggles the slide menu in mobile views
	toggleMobileTray() {
		if(window.innerWidth < 600){
			let $target = document.getElementById('ui-options');
			let $hamburger = document.getElementById('collapse-toolbar')
			if($target.classList.contains('active')){
				Velocity($hamburger, 'reverse', { duration: 500, easing: 'easeOutQuart'});
				Velocity($target, 'reverse', { duration: 500, easing: 'easeOutQuart', complete: function(){
					$target.classList.toggle('active');
				}})
			}
			else {
				Velocity($hamburger, {rotateZ: '90deg'}, { duration: 500, easing: 'easeOutQuart'});
				Velocity($target, { translateX: '150px'}, { duration: 500, easing: 'easeOutQuart', complete: function(){
					$target.classList.toggle('active');
				}})
			}
		}
		
	}
	//Adds a gradual slidedown animation to the menu items
	revealAlerts(target, count, selected) {
		if(target !== 'account'){
			let $target = document.getElementById(target+'-target');
			if(selected === 'unselected'){
				$target.style.height = 43*count+'px';
				Velocity($target, 'slideDown', { duration: 500,  easing: 'easeOutQuart', complete: function(){
					$target.style.height = 'auto';
				}})
			}
			else {
				Velocity($target, 'reverse', { duration: 500,  easing: 'easeOutQuart', complete: function(){
					$target.style.height = 0;
				}})
			}
			
		}
	}
}
export default new toolbarAnimate()