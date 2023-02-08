

export class MediaModel {
    id: string;
    mediaTypeName: string;
    mediaTypeImageUrl: string;
}


export class MediaMainModel {
    id: string;
    mediaTypeId: string;
    isAudio: boolean;
    fileUrl: string;
    name: string;
}