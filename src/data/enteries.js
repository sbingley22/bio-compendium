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
  },

  "macrophages": {
    category: 'allies',
    background: './macrophage-idle.png',
    text: [
      'Macrophages are large, versatile cells that engulf and digest pathogens, dead cells, and debris in a process called phagocytosis.',
      'They release chemical signals (cytokines) to summon reinforcements and help coordinate the immune response.',
      'Some macrophages stay in tissues long-term, acting as sentinels ready to respond immediately to invaders.',
      '*Strengths:*',
      'Durable frontline units capable of absorbing damage.',
      'Can heal slightly by consuming enemies and debris.',
      'Continuously release signals to attract other immune cells.',
      '*Weaknesses:*',
      'Moderate attack speed and low burst damage.',
      'Can be overwhelmed by very large numbers of pathogens.',
      'Susceptible to certain pathogen evasion tactics (like TB hiding inside them).',
    ]
  },

  "neutrophils": {
    category: 'allies',
    background: 'neutrophil-idle.png',
    text: [
      'Neutrophils are the most abundant white blood cells and among the first to arrive at infection sites.',
      'They swarm enemies, unleashing reactive oxygen species and sticky DNA nets to trap and kill pathogens.',
      'Short-lived and expendable, they sacrifice themselves in large numbers to control infections early.',
      '*Strengths:*',
      'Fastest to respond — floods the battlefield within hours.',
      'High damage output against bacteria and fungi.',
      'Can form traps that immobilize enemies.',
      '*Weaknesses:*',
      'Very short lifespan — die within 1-2 days after activation.',
      'Not effective against viruses hiding inside cells.',
      'Large numbers needed for significant effect.',
    ]
  },

  "eosinophils": {
    category: 'allies',
    background: 'eosinophil-idle.png',
    text: [
      'Eosinophils specialize in combating parasites and regulating allergic reactions.',
      'They attack using toxic proteins and inflammatory molecules that damage large invaders.',
      'They also help modulate the immune response to avoid excessive inflammation.',
      '*Strengths:*',
      'Highly effective against parasitic worms and similar large enemies.',
      'Can apply damage over time with toxic granules.',
      'Supports in controlling allergic responses.',
      '*Weaknesses:*',
      'Weak against bacteria and viruses.',
      'Limited presence under normal conditions (activated mostly in allergies/parasites).',
      'Collateral damage risk — their toxins can harm surrounding tissues.',
    ]
  },

  "basophils": {
    category: 'allies',
    background: 'basophil-idle.png',
    text: [
      'Basophils and mast cells release histamine and other chemicals that trigger inflammation and recruit other immune cells.',
      'They are key players in allergic reactions and in amplifying the body’s defense signals.',
      'While not strong fighters themselves, they shape the battlefield for allies.',
      '*Strengths:*',
      'Can create area effects that slow enemies or boost allies.',
      'Initiate strong inflammatory responses to draw reinforcements.',
      'Useful in allergic or parasitic defenses.',
      '*Weaknesses:*',
      'Low direct attack power.',
      'Effects can cause friendly fire (allergy-style overreactions).',
      'Rare in circulation — not always available for battle.',
    ]
  },

  "regulatory-t-cells": {
    category: 'allies',
    background: 'regulatory-t-cell-idle.png',
    text: [
      'Regulatory T cells (Tregs) help prevent the immune system from overreacting and attacking the body’s own tissues.',
      'They suppress excessive inflammation and maintain immune tolerance, preventing autoimmunity.',
      'In gameplay, they serve as controllers that balance offense and defense.',
      '*Strengths:*',
      'Prevents friendly fire and reduces collateral tissue damage.',
      'Can calm an overactive immune system to avoid burnout.',
      'Essential for maintaining long-term stability during prolonged battles.',
      '*Weaknesses:*',
      'Weak in direct combat and cannot attack pathogens themselves.',
      'If suppressed, autoimmunity or uncontrolled inflammation can occur.',
      'Overuse can lead to weak immune responses, letting enemies thrive.',
    ]
  }
}
