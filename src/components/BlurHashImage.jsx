import { useEffect, useRef, useState } from "react";
import { decode } from "blurhash";
import { urlForImage } from "../lib/sanity";

const CANVAS_SIZE = 32;

export default function BlurHashImage({ source, alt }) {
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const blurHash = source?.blurHash;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!blurHash || !canvas) return;
    const pixels = decode(blurHash, CANVAS_SIZE, CANVAS_SIZE);
    const ctx = canvas.getContext("2d");
    const imageData = ctx.createImageData(CANVAS_SIZE, CANVAS_SIZE);
    imageData.data.set(pixels);
    ctx.putImageData(imageData, 0, 0);
  }, [blurHash]);

  return (
    <>
      <img src={urlForImage(source)} alt={alt} onLoad={() => setLoaded(true)} />
      {blurHash ? (
        <canvas
          ref={canvasRef}
          width={CANVAS_SIZE}
          height={CANVAS_SIZE}
          aria-hidden="true"
          className={`blurhash-canvas${loaded ? " is-loaded" : ""}`}
        />
      ) : null}
    </>
  );
}
