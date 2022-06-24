import http from "k6/http";
import { sleep, check } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


export let options = {
    vus: 10,
    duration: "5s",
  };

export default function () {
  const res = http.get('http://localhost:9094/dialogs');
  check(res, {
    'status was 200': (r) => r.status == 200,
    'transaction time OK': (r) => r.timings.duration < 500,
  });
  sleep(1);
}
export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}