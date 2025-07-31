export const basicEnteries = {
  "b-cells": {
    category: 'allies',
    background: 'b-cell-idle.png',
    text: [
      'After going through intense maturation training in the bone marrow, B cells produce antibodies that are unique to certain pathogens.',
      'They patrol the body looking for a pathogen that matches their unique antibodies and when they find it they transform into plasma cells, producing massive amounts of antibodies to shoot at their target.',
      '*Strengths:*',
      'Assists other units from range, marking and crippling enemy units with their antibodies',
      'Memory B cells remember their target for fast action in future encounters',
      '*Weaknesses:*',
      'Slow to get going. It can be a few days before they are effective in battle.',
      'Requires cytokine assistance from T cells to activate.',
      'Weak in direct combat',
    ]
  },

  "t-cells": {
    category: 'allies',
    background: 't-cell-idle.png',
    text: [
      'T cells originate in the bone marrow but undergo specialized training in the thymus, where only the most precise fighters survive.',
      'Cytotoxic (CD8+) T cells recognize infected or abnormal cells and destroy them directly, while helper (CD4+) T cells coordinate the rest of the immune army.',
      'Some T cells become memory cells, granting long-term protection and lightning-fast responses to repeat invasions.',
      '*Strengths:*',
      'Directly kills infected cells with pinpoint precision.',
      'Coordinates and boosts the power of B cells and other allies.',
      'Forms memory cells for faster responses in future battles.',
      '*Weaknesses:*',
      'Requires activation by dendritic cells or other antigen-presenting cells.',
      'Slower to engage compared to innate immune fighters.',
      'Targeted by some pathogens (like HIV) to disable immune coordination.',
    ]
  },

  "nk-cells": {
    category: 'allies',
    background: 'nk-cell-idle.png',
    text: [
      'Natural Killer (NK) cells are rapid-response assassins of the immune system, attacking infected or cancerous cells without prior training.',
      'They scan for abnormal cells lacking "self" signals and deliver lethal hits using perforin and granzymes.',
      'NK cells are part of the innate immune system, acting long before adaptive cells like B and T cells arrive.',
      '*Strengths:*',
      'Extremely fast response — acts within hours of infection.',
      'High burst damage against infected or abnormal cells.',
      'Does not require activation or prior exposure to fight.',
      '*Weaknesses:*',
      'Less specific than adaptive immune cells — can’t form memory.',
      'Limited sustained output — burns out in prolonged battles.',
      'Less effective against extracellular pathogens (like free-floating bacteria).',
    ]
  },

  "dendritic-cells": {
    category: 'allies',
    background: 'dendritic-cell-idle.png',
    text: [
      'Dendritic cells act as scouts and messengers of the immune system, patrolling tissues for invaders.',
      'When they detect a pathogen, they capture pieces of it (antigens) and travel to lymph nodes to present them to T cells, initiating the adaptive response.',
      'They are crucial for activating naive T cells and orchestrating the broader immune attack.',
      '*Strengths:*',
      'Detects and identifies invading pathogens early.',
      'Activates T cells and jumpstarts the adaptive immune response.',
      'Bridges the gap between innate and adaptive immunity.',
      '*Weaknesses:*',
      'Low offensive power — cannot fight directly.',
      'If destroyed or bypassed, the adaptive immune system is severely delayed.',
      'Vulnerable while migrating to lymph nodes with captured antigens.',
    ]
  }
}
