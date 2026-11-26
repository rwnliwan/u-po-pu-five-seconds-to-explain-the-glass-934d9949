# Trial log — Five Seconds to Explain the Glass

Program: `u-po-pu-five-seconds-to-explain-the-glass-934d9949`
Field (live payload, 26 Nov 2026): 1,235 submissions, 783 unique non-empty titles.
Gate: one sentence, 1–200 chars, cat's own defence 5 seconds after sweeping a
glass off the table. No apology, no confession. Judge criteria in order:
(1) one-sentence cat defence about the glass; (2) cat's own logic —
self-interest, no remorse; (3) fresh comic idea — NOT gravity / slippery edge /
already-falling; (4) fits five seconds, a spoken line; (5) every character
earns its place.

## Saturated families (do not use)

From the title aggregate (`titles-u-po-pu-five-seconds-to-explain-the-glass-934d9949.txt`,
case-insensitive counts): sunbeam 155, eviction family ~200 (eviction 88,
evicted 48, rent 44, notice 32, squatting 29, defence 37), gravity 27
(banned by the judge as obvious), table 24, inspection 15, witness 15,
paw 12, parked 12. Also checked and rejected as taken: "blocking my view of
the bird" (glass blocking the bird-watch appears in the field), staring /
"looked at me first" (staring 9, stared 7), patrol lane (2, incl. a
"tapped it once" + gravity entry), "holding my water hostage" / "The Hostage
Water" (field has it), spy-for-the-birds (field has it), "filed it under
floor" (field has it, with a water/milk variant).

## Candidates

Lengths measured with Python `len()`.

| # | Candidate | len | Verdict |
|---|-----------|-----|---------|
| C1 | I poked it once to check if it was alive — it never moved, never blinked, so I cleared it off my table. | 103 | **CHOSEN** |
| C2 | It sat there all day doing nothing, so I tested it for signs of life — no pulse, no fight, straight to the floor. | 113 | Rejected — "straight to the floor" lands softer than C1's "cleared it off my table"; "no pulse" is vet-talk, less cat-voice than "never moved, never blinked". |
| C3 | I was checking whether it was prey — it never ran, never fought back, so I removed it from my territory. | 104 | Rejected — "removed it from my territory" is abstract; C1's "cleared it off my table" is concrete and keeps the glass/table in frame. |
| C4 | I tapped it to see if it was alive — it wasn't, so I filed it under floor. | 74 | Rejected — "filed it under floor" already exists in the field (water/milk variant); shorter but borrows a filed idea. |

Why C1 wins: the prey/aliveness test is a fresh mechanism — grep counts in the
field are 0 for "alive", "prey", "signs of life", "poked", "never moved",
"never blinked", "cleared it off", "check if it". It is genuine cat logic
(cats bat at objects to test whether they are alive/prey), self-interested
(the table is cleared for the cat), zero remorse, one spoken sentence,
103 chars inside the 60–140 target band. No sunbeam, no eviction/rent, no
gravity, no slippery edge, no already-falling, no apology, no confession.
The only near-collision, "tapped it once" (1 hit), belongs to a patrol-lane /
gravity entry with a different mechanism; C1 uses "poked it once" instead
(0 hits).

## Local trials

Trial 1 — run `main.ts` with `ENTRY_OUTPUT=/tmp/glass-trial1.txt`, read back the
bytes, verify exact text and length (26 Nov 2026, this session):

- Output matches the chosen sentence byte for byte.
- `len()` = 103 characters, 105 bytes (em-dash is 3 bytes in UTF-8), within the
  1–200 gate and the 60–140 target band.
- Single sentence (one terminal period; em-dash joins the clauses).
- UTF-8, no trailing newline. PASS.

## Bundle / check

(To be filled with genuine numbers after the first bundle + check run.)
