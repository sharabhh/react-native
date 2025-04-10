class Place {
    constructor(title, imgUri,address, location){
        this.title = title;
        this.imgUri = imgUri;
        this.address = address;
        this.location = location; // {lat: 0, lng: 0}
        this.id = new Date().toString() + Math.random().toString();
    }
}
