function videoPlay(id) {

    const urlSecreta = "https://platxo.com/" + id;
    console.log("se está reproduciendo desde la url " + urlSecreta);
}

function videoStop(id) {

    const urlSecreta = "https://platxo.com/" + id;
    console.log("Pausamos la url" + urlSecreta);
}

export class PlatziClass {
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }

    pausar() {
        videoStop(this.videoID);
    }
}