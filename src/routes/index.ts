import express from 'express';
import cropItRoute from './api/route.cropit';

const router = express.Router();

// the main router response
const welcome = `
<h1>Cropit.</h1>
<h3>Image processing api</h3>
<p>Choose your image and  put your image size (width & height) after our URL and you'll get a placeholder.</p>
<ul>
<li><a href="http://localhost:3000/api/route.cropit?filename=encenadaport&width=400&height=300"><img src="http://localhost:3000/api/route.cropit?filename=encenadaport&width=400&height=300" alt="encenadaport"></a></li>
<li><a href="http://localhost:3000/api/route.cropit?filename=fjord&width=400&height=300"><img src="http://localhost:3000/api/route.cropit?filename=fjord&width=400&height=300" alt="fjord"></a></li>
<li><a href="http://localhost:3000/api/route.cropit?filename=icelandwaterfall&width=400&height=300"><img src="http://localhost:3000/api/route.cropit?filename=icelandwaterfall&width=400&height=300" alt="icelandwaterfall"></a></li>
<li><a href="http://localhost:3000/api/route.cropit?filename=palmtunnel&width=400&height=300"><img src="http://localhost:3000/api/route.cropit?filename=palmtunnel&width=400&height=300" alt="palmtunnel"></a></li>
<li><a href="http://localhost:3000/api/route.cropit?filename=santamonica&width=400&height=300"><img src="http://localhost:3000/api/route.cropit?filename=santamonica&width=400&height=300" alt="santamonica"></a></li>
</ul>`;

router.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    res.status(200).send(welcome);
  }
);

router.use('/api/route.cropit', cropItRoute);

export default router;
