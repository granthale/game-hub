const getCroppedImgUrl = (url : string) => {
    const target = "media/"
    const index = url.indexOf(target) + target.length;
    url.slice(0, index);
    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}

export default getCroppedImgUrl