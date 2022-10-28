import fs from 'fs'; // to deal with files
import sharp from 'sharp'; // to crop images
import path from 'path'; // to deal with file paths

// images + thumbnails path (folders)
const imgPath = path.resolve(__dirname, '../../images/full');
const thumbPath = path.resolve(__dirname, '../../images/thumbnail');

// 1- get files path
async function getPath(
  name: string,
  width: number,
  height: number
): Promise<null | string> {
  if (!name) {
    return null;
  }

  const myFile: string =
    width && height
      ? path.resolve(thumbPath, `${name}_${width}_${height}.jpg`)
      : path.resolve(imgPath, `${name}.jpg`);

  try {
    await fs.existsSync(myFile);

    return myFile;
  } catch {
    return null;
  }
}

// 2- If file was found or not
function foundThumb(name: string, width: number, height: number): boolean {
  const filePath: string = path.resolve(
    thumbPath,
    `${name}_${width}_${height}.jpg`
  );
  if (fs.existsSync(filePath)) {
    return true;
  } else {
    return false;
  }
}
// 3- Main use of sharp package
const cropit = async (
  name: string,
  width: number,
  height: number
): Promise<null | string> => {
  if (!fs.existsSync(imgPath)) {
    fs.mkdirSync(thumbPath);
  }
  const thumbFilePath: string = path.resolve(
    thumbPath,
    `${name}_${width}_${height}.jpg`
  );
  const imgFilePath: string = path.resolve(imgPath, `${name}.jpg`);

  try {
    await sharp(imgFilePath)
      .resize(width, height)
      .toFormat('jpeg')
      .toFile(thumbFilePath);
    return thumbFilePath;
  } catch (e) {
    return 'Image could not be created';
  }
};

export { getPath, foundThumb, cropit };
