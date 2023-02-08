
export class GalleryImagesmodel {
    id: string;
    galleryImageUrl: string;
}

export class GalleryModel {
    id: string;
    name: string;
    isEnabled: boolean;
    galleryImagesmodel: GalleryImagesmodel[]=[];
}