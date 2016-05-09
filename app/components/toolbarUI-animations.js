import Velocity from '../lib/velocity'

class toolbarAnimate {
	constructor() {
	}
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
	revealAlerts(target, count, selected) {
		console.log(selected);
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