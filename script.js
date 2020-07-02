
alert(' ~ Selamat Datang di Game Suwit Jawa ~ ');
alert(' ~ Selamat Bermain!! ~ ');

// Menentukan pilihan Computer

function getPilihanComputer() {
    const comp = Math.random();
    if ( comp < 0.34 ) return 'gajah';
    if ( comp >= 0.34 && comp < 0.67 ) return 'orang';
	else return 'semut'
}

  // Menentukan rules

function getHasil(comp, player) {
    if ( player == comp) return 'SERI!';
    if ( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if ( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if ( player == 'semut' ) return ( comp == 'orang') ? 'KALAH!' : 'MENANG!';

}

// Menambahkan function pemutaran pada pilihan Computer

function putar() {
	const imgComputer = document.querySelector('.img-komputer');
	const gambar = ['gajah', 'semut', 'orang'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function() {
		if (new Date().getTime() - waktuMulai > 1000) {
			clearInterval;
			return;
		}
		imgComputer.setAttribute('src', '../Game Suwit Jawa v.2/Image/' + gambar[i++] + '.png');
		if ( i == gambar.length ) i = 0;
	}, 100);
};


const image = document.querySelectorAll('li img');
image.forEach(function(pil) {
	pil.addEventListener('click', function() {
		const pilihanComputer = getPilihanComputer();
	    const pilihanPlayer = pil.className;
	    const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

		// Menampilkan hasil dari pemutaran

        setTimeout(function() {
        	const imgComputer = document.querySelector('.img-komputer');
	        imgComputer.setAttribute('src', '../Game Suwit Jawa v.2/Image/' + pilihanComputer + '.png');
				const info = document.querySelector('.info');
				info.innerHTML = hasil;
				if (hasil == 'MENANG!') {
					info.style.backgroundColor = 'green';
				} else if (hasil == 'KALAH!') {
					info.style.backgroundColor = 'red';
				} else {
					info.style.backgroundColor = 'gray';
				}

				// Score Computer dan Player
				
				const splay = document.querySelector('.score-player');
				const scomp = document.querySelector('.score-komputer');
				let win = parseInt( splay.innerText );
				let lose = parseInt( scomp.innerText );

				if ( hasil == 'MENANG!' ) 
				splay.innerHTML = win += 1;
				if ( hasil == 'KALAH!' )
				scomp.innerHTML = lose += 1;

				// Reset Button

				const btn = document.querySelector('.btn-reset');
				btn.addEventListener('click', function() {
					splay.innerHTML = 0;
					scomp.innerHTML = 0;
					info.innerHTML = "";
					info.style.backgroundColor = 'white';
					imgComputer.setAttribute('src', 'Image/gajah.png');
				});
        }, 1000);
	});
});



// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pGajah.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);


// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', '../Game Suwit Jawa v.2/Image/' + pilihanComputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });


// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function() {
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pOrang.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);


// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', '../Game Suwit Jawa v.2/Image/' + pilihanComputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });


// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function() {
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pSemut.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);


// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', '../Game Suwit Jawa v.2/Image/' + pilihanComputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });


