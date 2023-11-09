// Media Queries for Responsive Design
const breakpoints = [1, 480, 768, 992]; 
export const min = breakpoints.map((bpMin) => `@media (min-width: ${bpMin}px)`);

const breakpoints2 = [479, 767, 991, 1200];
export const max = breakpoints2.map((bpMax) => ` and (max-width: ${bpMax}px)`);
