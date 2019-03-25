(() => {
	console.log('fired');


// Grab the sheildsat the bottom of the page
	const shields = document.querySelectorAll('.sigil-container');
		  lightBox = document.querySelector('.lightbox');
		  video = document.querySelector('video');
		  closeLB = document.querySelector('.lightbox-close');
		  banners = document.querySelector('#houseImages');

	function openLightbox() {
		// grab the right video source
		// debugger;
		// get the lowercase house name from the class list
		let targetHouse = this.className.split(" ")[1];
		// console.log(targetHouse);
		
		// make sure the names match - nees to be uppercase
		// stark becomes Stark -> first make a capital S, then add tark (or any house name)
		let targetSrc = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		video.src = `video/House-${targetSrc}.mp4`;


		lightBox.classList.add('lightbox-on');
		video.load();
		video.play();
	}
	function closeLightbox() {
		lightBox.classList.remove('lightbox-on');
		// rewind the video to the beginning
		// and also pause it
		video.currentTime = 0;
		video.pause();
	}

	function animateBanner() {
		const offSet = 600; //this is the offset / width of one image

	    // this is the total distance the iamages need to move as a pixel value
	    // dataset.offset is coming from eaxh shield we click on
	    
	    totalOffset = this.dataset.offset * offSet + "px";
	    banners.style.right = totalOffset;
	}
	    

	// shields.forEach(sigil => sigil.addEventListener('click', openLightbox));
	 shields.forEach(sigil => sigil.addEventListener('click', animateBanner));

	video.addEventListener('ended', closeLightbox);
	closeLB.addEventListener('click', closeLightbox);
})();
