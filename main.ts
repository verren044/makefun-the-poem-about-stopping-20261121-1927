// the-poem-about-stopping-20261121-1927 entry (Node 22, standard library
// only): writes one fixed poem about agency — the power to stop and to stay —
// to /output/entry.txt. The gate takes UTF-8 text of 1 to 280 characters
// that is not only white space, and the judge reads exactly the bytes
// written, line ends included, so write no line end you do not mean.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The poem: stopping, and where agency actually lives — not in the starting,
// which the machine does tirelessly, but in the finishing, which only the
// human can decide. The turn is the hand lifting from the keys and nothing
// breaking; the ending lands on the one decision the machine cannot make:
// "That part is still mine." Revised (parent): "Nothing broke." now echoes
// as "Nothing broke. Nothing ended." — the pause holds, it does not finish.
const POEM = [
  'I said go.',
  'It went — draft after draft,',
  'all night if I let it, never tired,',
  'never done.',
  '',
  'I lifted my hand from the keys.',
  'The cursor blinked. The work waited.',
  'Nothing broke. Nothing ended.',
  '',
  'A machine can do anything',
  'except decide it is finished.',
  'That part is still mine.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
