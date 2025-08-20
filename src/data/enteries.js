export const allies = {

  "neutrophil": {
    category: 'allies',
    type: 'innate',
    architype: 'orc berserker',
    background: 'neutrophil-card.png',
    text: [
      'Neutrophils are berserkers. They are the first to the fight, self destructive, and use crude but effective brute force tools.',
      'They swarm enemies, unleashing reactive oxygen species and sticky DNA nets to trap and kill pathogens.',
      'Short-lived and expendable, they sacrifice themselves in large numbers to control infections early.',
      '*Strengths:*',
      'Fastest to respond.',
      'High damage output against bacteria and fungi.',
      'Can form traps that immobilize enemies.',
      '*Weaknesses:*',
      'Very short lifespan',
      'Not effective against viruses hiding inside cells.',
      'Large numbers needed for significant effect.',
    ]
  },

  "natural-killer": {
    category: 'allies',
    type: 'innate',
    architype: 'assassin',
    background: 'natural-killer-card.png',
    text: [
      'Natural Killer (NK) cells are rapid-response assassins of the immune system, attacking infected or cancerous cells without prior training.',
      'They are surveillance assassins, going from cell to cell checking for MHC Class 1 markers. If its not there or faulty they cut into the cell with their poison granzyme laced perforin blade.',
      '*Strengths:*',
      'Extremely fast response — acts within hours of infection.',
      'High burst damage against infected or abnormal cells.',
      'Does not require activation or prior exposure to fight.',
      '*Weaknesses:*',
      'Less specific than adaptive immune cells — can’t form memory.',
      'Limited sustained output — burns out in prolonged battles.',
      'Less effective against extracellular pathogens (like free-floating bacteria).',
    ],
    battles: ['natural-killer-vs-cancer-cells'],
  },

  "macrophages": {
    category: 'allies',
    type: 'innate',
    architype: 'werewolf',
    background: './macrophage-card.png',
    text: [
      'Macrophages are large, versatile cells that engulf and digest pathogens, dead cells, and debris in a process called phagocytosis.',
      'When activated by a pathogen it transforms into its M1 werewolf form.',
      'It releases cytokines to summon reinforcements and presents the antigens it eats via MHC Class II surface molecule which activates T cells.',
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
    architype: 'wizard',
    background: 'eosinophil-card.png',
    text: [
      'Eosinophilic wizards are rare and specialize in combating parasites (dragons) and regulating allergic reactions.',
      'They attack using toxic proteins and inflammatory molecules that damage large invaders.',
      'They also help modulate the immune response to avoid excessive inflammation.',
      '*Strengths:*',
      'Highly effective against parasitic worms, dragons and similar large enemies.',
      'Staff is infused with granules which can be thrust into parasites.',
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
    architype: 'alchemist',
    background: 'basophil-card.png',
    text: [
      'Basophils and mast cells are alchemists that release histamine and other chemicals that trigger inflammation and recruit other immune cells.',
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

  "microglia": {
    category: 'allies',
    type: 'innate',
    architype: 'mindflayer',
    background: 'microglia-card.png',
    text: [
      'Microglia are the resident macrophages of the brain and spinal card.',
      'They are constantly on patrol using their tentacles to scan for signs of damage, infection, or disease.',
      'When they detect it they become activated and engulf pathogens, dying neurons, and cellular debris.',
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

  "dendritic-cells": {
    category: 'allies',
    type: 'innate',
    architype: 'scout ranger',
    background: 'dendritic-card.png',
    text: [
      'Dendritic cells are the immune system’s vigilant rangers and messengers, roaming the wilds on constant patrol for invaders.',
      'When they encounter an enemy, they capture fragments of it and then travel to the great gathering halls (lymph nodes) to present their findings to the commanders — the T cells.',
      'By delivering this intelligence, they ignite the adaptive army into action, ensuring a targeted and organized response.',
      '*Strengths:*',
      'Expert scouts — detect and identify pathogens early.',
      'Essential messengers that awaken naive T cells.',
      'Form the crucial bridge between innate and adaptive immunity.',
      '*Weaknesses:*',
      'Fragile in direct combat — cannot fight enemies themselves.',
      'If intercepted or destroyed, the adaptive response is delayed.',
      'Vulnerable during their long journey to the lymph nodes.'
    ]
  },

  "b-plasma": {
    category: 'allies',
    type: 'adaptive',
    architype: 'steampunk cannon',
    background: 'b-plasma-card.png',
    text: [
      'After going through intense maturation training in the bone marrow, B cells produce antibodies that are unique to certain pathogens.',
      'They patrol the body looking for a pathogen that matches their unique antibodies and when they find it, with help from helper T celss, they transform into plasma cells, producing massive amounts of antibodies to shoot at their target.',
      '*Strengths:*',
      'Assists other units from range, marking and crippling enemy units with their antibodies',
      '*Weaknesses:*',
      'Slow to get going.',
      'Requires cytokine assistance from T cells to activate.',
      'Weak in direct combat',
    ]
  },

  "b-memory": {
    category: 'allies',
    type: 'adaptive',
    architype: 'steampunk wise old lady',
    background: 'b-memory-card.png',
    text: [
      'The old wise memory B Cells bare the scars and knowledge from battles with old foes.',
      'They live long lives patroling the blood looking for any signs of the specific enemy they once fought.',
      'Should they find the pathogen again, they instantly start proliferating and producing an army of plasma B cells primed against that pathogen.',
      '*Strengths:*',
      'Memory B cells remember their target for fast action in future encounters with specific pathogens.',
      '*Weaknesses:*',
      'Only form after succesfully fighting the pathogen.',
    ]
  },

  "b-reg": {
    category: 'allies',
    type: 'adaptive',
    architype: 'steampunk mechanic',
    background: 'b-reg-card.png',
    text: [
      'The bregs come in at the end of the battle and tweak the plasma cells to calm down their antibody production.',
      'Essential for preventing autoimmunity',
      '*Strengths:*',
      'Prevent friendly fire',
      '*Weaknesses:*',
      'Weak in direct combat',
    ]
  },

  "t-helper": {
    category: 'allies',
    type: 'adaptive',
    architype: 'elven commander',
    background: 't-helper-card.png',
    text: [
      'Helper Ts are the managers, scouts, and unit commanders who coordinate and enhance the activity of other immune cells.',
      'Identifiable by their CD4 corecepter, they recognize antigens presented by MHC Class II molecules from antigen presenting cells like dendritic, macrophages and B cells.',
      'Once activated they rapidly divide and use their horn cytokines to communicate with other immune cells.',
      'There are 2 types of helper T comanders, Th1 - intracellular pathogens, and Th2 - extracellular pathogens.',
      '*Strengths:*',
      'Coordinates and boosts the power of B cells and other allies.',
      '*Weaknesses:*',
      'Requires activation by dendritic cells or other antigen-presenting cells.',
    ]
  },

  "t-cytotoxic": {
    category: 'allies',
    type: 'adaptive',
    architype: 'elven dark warrior',
    background: 't-cytotoxic-card.png',
    text: [
      'The dark elf assassins known as killer T cells are trained from birth to assassinate cells infected with a specific pathogen.',
      'They lie in the shadows until they are presented with their specific antigen by antigen presenting cells (like dendritic cells) and receive co-stimulatory signals from helper T cells.',
      'They then rapidly multiply and start scanning for cells presenting their specific antigen via their MHC Class I molecules.',
      'Once the target is aquired they lock into close range combat and kill the sick cell',
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

  "t-regulators": {
    category: 'allies',
    type: 'adaptive',
    architype: 'elven bard',
    background: 't-reg-card.png',
    text: [
      'Suppressor T cells (Tregs) help prevent the immune system from overreacting and attacking the body’s own tissues.',
      'They come in towards the end of the battle and play tranquil, calming songs to the rest of the immune system to clam them down and prevent autoimmunity and increase immune tolerance',
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

  "t-memory": {
    category: 'allies',
    type: 'adaptive',
    architype: 'wise old battle scared elf',
    background: 't-memory-card.png',
    text: [
      'Memory T Cells are the old wise elves that bare the scars of past encounters with the specific pathogen they defeated.',
      'They patrol the body looking for signs the old enemy has returned and if they find it they rapidly multiply producing many fresh helper and killer T cells ready to smash the pathogen before it gets a foothold.',
      '*Strengths:*',
      'Can quickly shut down a recurring pathogen',
      '*Weaknesses:*',
      'Needs to have succesfully fought the pathogen first'
    ]
  },

}

export const pathogens = {
  "bacteria": {
    category: 'enemies',
    background: 'bacteria-card.png',
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
    background: 'virus-card.png',
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
    background: 'parasite-card.png',
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
    background: 'fungi-card.png',
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
    background: 'toxin-card.png',
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
    background: 'prion-card.png',
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
    background: 'biofilm-card.png',
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
    background: 'cancer-cell-card.png',
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
  "natural-killer-vs-cancer-cells": {
    category: 'battle',
    background: 'nk-vs-cancer.png',
    text: [
      'The natural killer cell gets up close and personal with a suspicious cell. If the cell does not greet the NKs hand shake satisfactory then the NK cell eliminates the defective / cancerous / infected cell.'
    ]
  }

}
