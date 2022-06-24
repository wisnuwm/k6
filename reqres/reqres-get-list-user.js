import http from "k6/http";
import { sleep, check } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


export let options = {
    vus: 100,
    duration: "10s",
  };

export default function () {
  const res = http.get('https://reqres.in/api/users?page=2');
  check(res, {
    'status was 200': (r) => r.status == 200,
    'transaction time OK': (r) => r.timings.duration < 500,
  });
  sleep(1);
}
export function handleSummary(data) {
  return {
    "report/k6-report.html": htmlReport(data),
  };
}