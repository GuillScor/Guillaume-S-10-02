interface Artist {
    id: string;
    name: string;
}
  
function findArtistIndex(artists, name) {
    for (let i = 0; i < artists.length; i++) {
        if (artists[i].name === name) {
            return artists[i].id;
        }
    }   
    return -1;
}
function findArtistIndexV2(artists, name) {
    let a = 0; 
    let b = artists.length - 1;
    while (a <= b) {
        const mid = Math.floor((a + b) / 2);
        if (artists[mid] === name) {
            return mid;
        } else if (artists[mid] < name) { 
            a = mid + 1; 
        } else { 
            b = mid - 1; 
        }
    }
    return -1; 
}

