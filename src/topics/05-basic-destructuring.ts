// Define una interfaz llamada AudioPlayer que describe la estructura de un reproductor de audio.
interface AudioPlayer {
    audioVolume: number; // Define una propiedad llamada audioVolume que debe ser un número.
    songDuration: number; // Define una propiedad llamada songDuration que debe ser un número.
    song: string; // Define una propiedad llamada song que debe ser una cadena de texto.
    details: Details; // Define una propiedad llamada details que debe cumplir con la interfaz Details.
}

// Define una interfaz llamada Details que describe la estructura de los detalles de una canción.
interface Details {
    author: string; // Define una propiedad llamada author que debe ser una cadena de texto.
    year: number; // Define una propiedad llamada year que debe ser un número.
}

// Crea un objeto llamado audioPlayer que cumple con la interfaz AudioPlayer.
const audioPlayer: AudioPlayer = {
    audioVolume: 90, // Asigna el valor 90 a la propiedad audioVolume.
    songDuration: 36, // Asigna el valor 36 a la propiedad songDuration.
    song: "Mess", // Asigna la cadena de texto "Mess" a la propiedad song.
    details: { // Asigna un objeto anidado que cumple con la interfaz Details a la propiedad details.
        author: "Ed Sheeran", // Asigna la cadena de texto "Ed Sheeran" a la propiedad author.
        year: 2015 // Asigna el valor 2015 a la propiedad year.
    }
}

// Utiliza la desestructuración de objetos para extraer propiedades específicas del objeto audioPlayer y asignarlas a nuevas variables.
const { song: anotherSong, songDuration: duration, details } = audioPlayer;
/*La desestructuración de objetos es una característica de JavaScript y TypeScript que permite extraer propiedades de un objeto y asignarlas a variables individuales. En este caso, estamos extrayendo las propiedades song, songDuration y details del objeto audioPlayer.*/

// Utiliza la desestructuración de objetos nuevamente para extraer la propiedad author del objeto details y asignarla a una nueva variable.
const { author } = details;

// Imprime en la consola el valor de la variable anotherSong.
console.log('Song:', anotherSong);
// Imprime en la consola el valor de la variable duration.
console.log('Duration:', duration);
// Imprime en la consola el valor de la variable author.
console.log('Author:', author);




//Desestructuración de objetos en TypeScript, utilizamos llaves cuadradas [] para acceder a los elementos de un array.

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log('Personaje 1:', dbz[0]); // Accediendo al primer elemento del array





export {};
