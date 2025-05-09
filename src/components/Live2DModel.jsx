import { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import { Live2DModel } from "pixi-live2d-display/cubism4";

Live2DModel.registerTicker(PIXI.Ticker);

export default function Live2DCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const app = new PIXI.Application({
      view: document.createElement("canvas"),
      resizeTo: window,
      backgroundAlpha: 0,
    });

    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(app.view);

    Live2DModel.from("/live2d/model/charity_2.1.model3.json")
      .then((model) => {
        model.scale.set(0.47);
        model.x = -210;
        model.y = -100;
        app.stage.addChild(model);
      })
      .catch((err) => {
        console.error("Live2D load error:", err);
      });

    return () => {
      app.destroy(true, { children: true });
    };
  }, []);

  return <div ref={containerRef} style={{ width: 600, height: 600 }} />;
}
