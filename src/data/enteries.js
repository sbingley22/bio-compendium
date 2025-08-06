export const allies = {

  "neutrophils": {
    category: 'allies',
    type: 'innate',
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

  "nk-cells": {
    category: 'allies',
    type: 'innate',
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

  "b-cells": {
    category: 'allies',
    type: 'adaptive',
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
    type: 'adaptive',
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

  "nk-t-cells": {
    category: 'allies',
    type: 'adaptive',
    background: 'nk-t-cell-idle.png',
    text: [
      'Natural Killer T (NKT) cells are a hybrid between T cells and NK cells, combining adaptive recognition with rapid innate response.',
      'They recognize lipid antigens presented by specialized molecules (CD1d) and quickly release cytokines to coordinate the immune system.',
      'NKT cells can switch between offensive and supportive roles depending on the battle’s needs.',
      '*Strengths:*',
      'Extremely fast activation — bridges innate and adaptive immunity.',
      'Versatile — can support B/T cells or directly attack enemies.',
      'Effective against certain lipid-coated pathogens (like some bacteria and cancer cells).',
      '*Weaknesses:*',
      'Less numerous than other immune cells.',
      'Specialized activation requirements (lipid antigens).',
      'Not as potent in direct combat as cytotoxic T cells or NK cells.',
    ]
  },

  "dendritic-cells": {
    category: 'allies',
    type: 'innate',
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
    type: 'innate',
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

  "eosinophils": {
    category: 'allies',
    type: 'innate',
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
    type: 'innate',
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
    type: 'adaptive',
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
  },

  "complement-proteins": {
    category: 'allies',
    type: 'innate',
    background: 'complement-proteins-idle.png',
    text: [
      'Complement proteins are a group of circulating molecules that form part of the innate immune system.',
      'They enhance the ability of antibodies and phagocytes to clear pathogens by tagging invaders (opsonization), forming attack complexes, and amplifying inflammation.',
      'In gameplay, they act as automatic defenses, weakening enemies passively or finishing them off after they’ve been marked by antibodies.',
      '*Strengths:*',
      'Works passively — no activation needed once triggered.',
      'Can directly destroy some bacteria by punching holes in their membranes.',
      'Boosts effectiveness of B cells and macrophages.',
      '*Weaknesses:*',
      'Cannot act alone — needs antibodies or pathogen markers to target accurately.',
      'Limited against intracellular pathogens (viruses hiding inside cells).',
      'Once depleted, takes time to regenerate.',
    ]
  }

}

export const pathogens = {
  "bacteria": {
    category: 'enemies',
    background: 'bacteria-idle.png',
    text: [
      'Bacteria are single-celled organisms that invade tissues, consume nutrients, and release harmful toxins.',
      'Some multiply rapidly outside cells, while others hide inside immune cells to avoid detection.',
      'Different strains can develop resistance to attacks, making them recurring threats.',
      '*Strengths:*',
      'Fast reproduction — can overwhelm defenses quickly.',
      'Variety of tactics (toxins, biofilms, hiding inside cells).',
      'Some strains develop resistance to immune weapons.',
      '*Weaknesses:*',
      'Vulnerable to antibodies and phagocytosis once identified.',
      'Cannot hide well from complement proteins or neutrophil swarms.',
      'Certain antibiotics or immune boosts can wipe out entire colonies.',
    ]
  },

  "viruses": {
    category: 'enemies',
    background: 'virus-idle.png',
    text: [
      'Viruses are genetic parasites that invade host cells and hijack them to replicate.',
      'They are invisible to most immune defenses while inside cells but expose themselves briefly when traveling between hosts.',
      'Different viruses mutate rapidly, allowing them to evade memory defenses over time.',
      '*Strengths:*',
      'Extremely small and stealthy — hides inside host cells.',
      'Mutates quickly to bypass adaptive immunity.',
      'Massive replication potential once inside a cell.',
      '*Weaknesses:*',
      'Cannot survive or reproduce outside a host cell.',
      'Exposed during movement between cells (window for NK/T cell attack).',
      'Strong antibody responses can neutralize them completely.',
    ]
  },

  "parasites": {
    category: 'enemies',
    background: 'parasite-idle.png',
    text: [
      'Parasites are large, complex invaders such as worms or protozoa that feed on host nutrients and tissues.',
      'They trigger strong inflammatory responses and are often too big to be eaten by immune cells.',
      'The immune system must rely on specialized cells and toxic proteins to drive them out.',
      '*Strengths:*',
      'Massive size makes them resistant to phagocytosis.',
      'Can manipulate host immune signals to prolong infection.',
      'Difficult to completely eliminate — often require multiple attack strategies.',
      '*Weaknesses:*',
      'Highly visible — immune cells detect them easily.',
      'Susceptible to eosinophils and IgE-mediated responses.',
      'Slow to reproduce compared to bacteria or viruses.',
    ]
  },

  "fungi": {
    category: 'enemies',
    background: 'fungi-idle.png',
    text: [
      'Fungi include molds and yeasts that can infect skin, lungs, or other tissues.',
      'They often cause chronic infections in people with weakened immunity and form biofilms that resist attack.',
      'Fungal cell walls are unique targets for immune weapons and antifungal drugs.',
      '*Strengths:*',
      'Can survive in hostile environments and form resilient biofilms.',
      'Opportunistic — thrive when the immune system is distracted or weak.',
      'Diverse forms (yeast, hyphae) make them adaptable.',
      '*Weaknesses:*',
      'Easily recognized by innate immune receptors (like macrophages).',
      'Slow-growing compared to bacteria and viruses.',
      'Susceptible to neutrophil and macrophage attacks when exposed.',
    ]
  },

  "toxins": {
    category: 'enemies',
    background: 'toxin-idle.png',
    text: [
      'Toxins are poisonous molecules released by certain bacteria and parasites to damage tissues or confuse immune cells.',
      'They act independently of the pathogen itself, spreading damage even after the invader is gone.',
      'Neutralizing toxins often requires rapid antibody response or detoxification systems.',
      '*Strengths:*',
      'Can harm multiple cells at once — area damage effect.',
      'Acts quickly, even before the immune system detects the pathogen.',
      'Persists after the pathogen is destroyed, causing prolonged damage.',
      '*Weaknesses:*',
      'Non-living — cannot adapt or reproduce.',
      'Neutralized effectively by specific antibodies.',
      'Dilution or rapid clearance reduces their potency over time.',
    ]
  },

  "prions": {
    category: 'enemies',
    background: 'prion-idle.png',
    text: [
      'Prions are misfolded proteins that spread by causing other proteins to misfold, leading to degenerative diseases.',
      'They are resistant to most immune responses and can persist for years in tissues.',
      'Prions do not trigger typical inflammation, making them stealthy and devastating.',
      '*Strengths:*',
      'Extremely resistant to immune destruction and most sterilization methods.',
      'Can accumulate silently for long periods before symptoms appear.',
      'Spread without traditional genetic material — hard to detect.',
      '*Weaknesses:*',
      'Spread very slowly compared to viruses or bacteria.',
      'Do not actively evade immune cells — purely passive.',
      'Few types exist, limiting their variety in battle.',
    ]
  },

  "biofilm-clusters": {
    category: 'enemies',
    background: 'biofilm-idle.png',
    text: [
      'Biofilms are fortified communities of bacteria encased in a sticky protective layer.',
      'They form on surfaces like teeth, wounds, or implants, shielding bacteria from immune attacks and antibiotics.',
      'Breaking through the biofilm requires coordinated assaults and persistent immune pressure.',
      '*Strengths:*',
      'Highly resistant to phagocytosis and antibodies.',
      'Can regenerate even after partial destruction.',
      'Releases bacteria slowly, sustaining long-term infection.',
      '*Weaknesses:*',
      'Immobile — must stay attached to surfaces.',
      'Vulnerable to strong inflammatory responses once the barrier is breached.',
      'Takes time to form — vulnerable in early stages.',
    ]
  },

  "cancer-cells": {
    category: 'enemies',
    background: 'cancer-cell-idle.png',
    text: [
      'Cancer cells are mutated host cells that grow uncontrollably and evade normal immune surveillance.',
      'They exploit "self" markers to hide from immune cells and secrete signals that suppress immune responses.',
      'NK cells and cytotoxic T cells are primary defenders against them, but some cancers adapt to avoid detection entirely.',
      '*Strengths:*',
      'Uses "self" disguise — hard to detect as an enemy.',
      'Rapid uncontrolled growth and invasion of tissues.',
      'Can suppress or exhaust nearby immune cells.',
      '*Weaknesses:*',
      'Vulnerable to activated NK cells and cytotoxic T cells.',
      'Exposed when mutations remove normal "self" markers.',
      'Targetable by antibodies or immune therapies when identified.',
    ]
  }
}

export const battles = {
  "natural-killer-vs-cancer cells": {
    category: 'battle',
    background: 'nk-vs-cancer.png',
    text: [
      'The natural killer cell gets up close and personal with a suspicious cell. If the cell does not greet the NKs hand shake satisfactory then the NK cell eliminates the defective / cancerous / infected cell.'
    ]
  }

}
