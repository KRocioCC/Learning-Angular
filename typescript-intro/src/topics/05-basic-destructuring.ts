interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
    
}
interface Details {
    authon: string;
    year: number;
}

//moldearemos un objeto con audio player
const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Young forever',
    details: {
        authon: 'BTS',
        year: 2020
    }
}

//desestructuración de objetos
//la desestructuración es una forma de extraer valores de un objeto o arreglo
//  y asignarlos a variables individuales.

const {song} = audioPlayer;
console.log({song});

const {songDuration:duration} = audioPlayer;
console.log('duration:' + {duration});


//hacer la desustruracion de author
//primero desestructuramos el objeto details
//despues desestructuramos el author
const {details} = audioPlayer;
const {authon} = details;
console.log('author:' + {authon});


//desestructuración de arreglos
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
console.log('personaje 3:', dbz[2] || 'no hay personaje 3');

const [p1, p2, trunks]: string[] = ['Goku', 'Vegeta', 'Trunks'];
console.error('personaje3', p2)

const [, , trunks2 = 'not found']: string[] = ['Goku', 'Vegeta'];
console.error('personaje3', trunks2)

export {};