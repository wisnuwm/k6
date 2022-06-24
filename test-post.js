import http from 'k6/http';
import { sleep, check } from "k6";

export let options = {
    vus: 4,
    duration: "10s",
  };

export default function () {
  const url = 'http://localhost:9094/dialogs';
  const payload = JSON.stringify({
    id: '',
    name: 'k6-test-k6',
    created: '',
    lastUpdated: '',
    graph: '{"cells":[{"type":"app.FlowchartStart","size":{"width":48,"height":48},"ports":{"items":[{"group":"out","id":"a37971b8-90de-4976-a364-27d1c99bfe7e"}]},"position":{"x":-176,"y":-192},"id":"78460432-0368-4fc5-844c-92d9685e8873","z":1,"attrs":{"label":{"text":"Start"}}},{"type":"app.Play","size":{"width":368,"height":80},"ports":{"items":[{"group":"in","id":"4e83a24a-0db7-4fd3-a7d5-55eec973b27e"},{"group":"out","attrs":{"portLabel":{"text":"Next..."}},"id":"7ec4954c-8952-48eb-93f4-ac6c75045f5f"}]},"position":{"x":-192,"y":-56},"id":"20cfb223-10c5-4884-b1da-46e91f6a6470","z":2,"prop":{"playlist":[{"silence":{"value":"1.7"}},{"prompt":{"value":"steak-0"}},{"tts":{"value":"Hi, Welcome to my channel"}}]},"attrs":{"body":{"stroke":"#E8E8E8"},"label":{"text":"Play"},"icon":{"xlinkHref":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMjEgMy4wMUgzYy0xLjEgMC0yIC45LTIgMlY5aDJWNC45OWgxOHYxNC4wM0gzVjE1SDF2NC4wMWMwIDEuMS45IDEuOTggMiAxLjk4aDE4YzEuMSAwIDItLjg4IDItMS45OHYtMTRjMC0xLjExLS45LTItMi0yek0xMSAxNmw0LTQtNC00djNIMXYyaDEwdjN6Ii8+PC9zdmc+"}}},{"type":"app.Link","labels":[{"attrs":{"labelText":{"text":"Label"}},"position":{"distance":0.25}}],"source":{"id":"78460432-0368-4fc5-844c-92d9685e8873","magnet":"portBody","port":"a37971b8-90de-4976-a364-27d1c99bfe7e"},"target":{"id":"20cfb223-10c5-4884-b1da-46e91f6a6470","magnet":"portBody","port":"4e83a24a-0db7-4fd3-a7d5-55eec973b27e"},"id":"21cbdd67-25cf-44db-a936-3acfb47364e9","z":3,"attrs":{}},{"type":"app.FlowchartEnd","size":{"width":48,"height":48},"ports":{"items":[{"group":"in","id":"0da5d925-fe5c-4de4-a223-29cefcb849cb"}]},"position":{"x":-168,"y":112},"id":"bb089ae8-b434-46e8-98c1-ec03d0391975","z":4,"attrs":{}},{"type":"app.Link","labels":[{"attrs":{"labelText":{"text":"Label"}},"position":{"distance":0.25}}],"source":{"id":"20cfb223-10c5-4884-b1da-46e91f6a6470","magnet":"portBody","port":"7ec4954c-8952-48eb-93f4-ac6c75045f5f"},"target":{"id":"bb089ae8-b434-46e8-98c1-ec03d0391975","magnet":"portBody","port":"0da5d925-fe5c-4de4-a223-29cefcb849cb"},"id":"e5946437-05e9-4617-a5a0-b596790b2448","z":5,"attrs":{}}]}',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
  sleep(1);
  check(res, {
    'status was 201': (r) => r.status == 201,
    'transaction time OK': (r) => r.timings.duration < 500,
  });
  sleep(1);
}