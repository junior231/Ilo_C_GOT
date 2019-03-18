(() => {
	console.log('fired');


// Grab the sheildsat the bottom of the page
	const shields = document.querySelectorAll('.sigil-container');
		  lightBox = document.querySelector('.lightbox');
		  video = document.querySelector('video');
		  closeLB = document.querySelector('.lightbox-close');

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

	shields.forEach(sigil => sigil.addEventListener('click', openLightbox));

	video.addEventListener('ended', closeLightbox);
	closeLB.addEventListener('click', closeLightbox);
})();
