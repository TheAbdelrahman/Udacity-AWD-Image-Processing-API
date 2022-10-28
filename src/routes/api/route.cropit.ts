import express from 'express';
import { getPath, foundThumb, cropit } from '../../util/cropit';

const cropItRoute = express.Router();

cropItRoute.get(
  '/',
  async (
    req: express.Request,
    res: express.Response
  ): Promise<string | void> => {
    let filename: string;
    let width: number;
    let height: number;

    //if name is missing
    if (!req.query.filename) {
      res.status(400).send('Please enter a valid file name!');
      return;
    } else {
      filename = req.query.filename as string;
    }

    //if width is missing or <= 0
    if (!req.query.width) {
      res.status(400).send('Please enter a valid width!');
      return;
    } else if (req.query.width && Number(req.query.width) <= 0) {
      res.status(400).send('Invalid width value!');
      return;
    } else {
      width = Number(req.query.width) as number;
    }

    //if height is missing or <= 0
    if (!req.query.height) {
      res.status(400).send('Please enter a valid height!');
      return;
    } else if (req.query.height && Number(req.query.height) <= 0) {
      res.status(400).send('Invalid height value!');
      return;
    } else {
      height = Number(req.query.height) as number;
    }

    let error: null | string = '';

    //first try to open thumbnail if failed => crop the original image
    if (!foundThumb(filename, width, height)) {
      error = await cropit(filename, width, height);
    }
    if (error) {
      res.sendFile(error);
      return;
    }

    //get path
    const path: null | string = await getPath(filename, width, height);

    if (path) {
      res.sendFile(path);
    } else {
      res.send('Please try again with valid values');
    }
  }
);

export default cropItRoute;
