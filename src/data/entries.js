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
    ],
    battles: ['Neutrophil-Footsoldier', 'Neutrophil-Extracellular-Traps'],
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
    battles: ['NK-Handshake'],
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
    ],
    battles: ["Macrophage-Presenting"],
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
    ],
    battles: ["Eosinophil-Parasite"],
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
    ],
    battles: ['Basophil-Activated'],
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
    ],
    battles: [],
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
    ],
    battles: ['Dendritic-Scouting'],
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
    ],
    battles: ['Bregs-After-Battle'],
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
    ],
    battles: [],
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
    ],
    battles: ['Bregs-After-Battle'],
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
    ],
    battles: ['T-Helper-Commanding', 'Macrophage-Presenting']
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
    ],
    battles: ['T-Killer-Assassination'],
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
    ],
    battles: ["Treg-After-Battle"],
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
    ],
    battles: ['T-Memory-Re-Engaging'],
  },

}

export const pathogens = {
  "bacteria": {
    category: 'enemies',
    architype: 'spider swarm',
    background: 'bacteria-card.png',
    text: [
      'The spider swarms known as bacteria creep and crawl into tissues, weaving webs of toxins and stealing precious nutrients from their host.',
      'Some spin biofilm fortresses to shield themselves from attack, while others sneak inside immune cells, turning their own hunters into hiding spots.',
      'They multiply with terrifying speed, overwhelming defenses before reinforcements can arrive.',
      '*Strengths:*',
      'Fast reproduction — can blanket the battlefield in overwhelming numbers.',
      'Cunning tactics: toxins, biofilms, and stealth within host cells.',
      'Many strains adapt quickly, becoming resistant to repeated attacks.',
      '*Weaknesses:*',
      'Vulnerable once marked by antibodies — easy prey for phagocytes.',
      'Neutrophil swarms and complement blasts can devastate colonies.',
      'Entire hordes can be wiped out by a well-aimed antibiotic strike.',
    ],
    battles: [],
  },

  "viruses": {
    category: 'enemies',
    architype: 'demon spirits',
    background: 'virus-card.png',
    text: [
      'Viruses are shapeshifting demon spirits that cannot live on their own. Instead, they possess host cells and force them to birth endless copies of their cursed essence.',
      'While hidden inside a host, they are cloaked from most attacks, surfacing only briefly as they leap from one cell to another.',
      'They are masters of mutation, constantly changing form to evade recognition by immune memory.',
      '*Strengths:*',
      'Stealthy — hides within host cells, invisible to most allies.',
      'Mutates rapidly, slipping past even seasoned memory defenses.',
      'Explosive replication once possession of a cell is complete.',
      '*Weaknesses:*',
      'Helpless outside a host — cannot survive alone.',
      'Exposed briefly during their jumps between cells.',
      'Antibodies can bind and neutralize them entirely when targeted.',
    ],
    battles: ['Virus-Infecting-Cell', ]
  },

  "parasites": {
    category: 'enemies',
    architype: 'monstrous beasts',
    background: 'parasite-card.png',
    text: [
      'Parasites are towering, grotesque beasts — worms, protozoa, and other monstrous invaders — that feast on the host’s blood and tissues.',
      'Too massive to be eaten whole, they must be bombarded with toxic spells and cursed proteins until they retreat or die.',
      'These beasts often twist the immune system’s signals, prolonging their stay and causing chaos within the battlefield.',
      '*Strengths:*',
      'Massive size makes them impervious to engulfing attacks.',
      'Manipulate immune signals to weaken or mislead defenders.',
      'Difficult to fully eliminate — can return if not purged completely.',
      '*Weaknesses:*',
      'Highly visible — impossible to sneak past vigilant defenders.',
      'Fall to eosinophil wizards and IgE-charged attacks.',
      'Slow breeders — gives time for allies to muster a coordinated strike.',
    ],
    battles: ["Eosinophil-Parasite"],
  },

  "cancer-cells": {
    category: 'enemies',
    architype: 'mutant abominations',
    background: 'cancer-card.png',
    text: [
      'Cancer cells are host-born abominations — twisted, mutated echoes of normal cells that turn against their kin.',
      'They hide behind false "self" banners, tricking the immune army into mistaking them for allies.',
      'Relentless in growth, they spread without end, carving out new lairs of corrupted tissue.',
      '*Strengths:*',
      'Masters of disguise — often slip past the immune watch.',
      'Grow rapidly and invade new territory unchecked.',
      'Can emit signals that exhaust or silence nearby defenders.',
      '*Weaknesses:*',
      'Vulnerable to NK assassins and cytotoxic T warriors once unmasked.',
      'Exposed when mutations strip away their disguise.',
      'Can be marked by antibodies and targeted with immune therapy strikes.',
    ],
    battles: ['NK-Handshake'],
  },

  "damaged-cells": {
    category: 'enemies',
    architype: 'fallen soldiers',
    background: 'damaged-cell-card.png',
    text: [
      'Damaged cells are fallen soldiers of the body’s own army. Burnt out, injured, or corrupted by toxins, they stumble through the battlefield leaking distress signals.',
      'Though not true enemies, their instability attracts pathogens and disrupts order, forcing immune allies to clear them away.',
      '*Strengths:*',
      'Emit loud distress flares (DAMPs) that summon immune reinforcements.',
      'Can briefly hold pathogens at bay by sacrificing themselves.',
      '*Weaknesses:*',
      'Weakened — easy prey for invaders.',
      'If not removed quickly, they feed inflammation and chaos.',
      'Can inadvertently aid enemies by distracting defenders.',
    ],
    battles: [],
  },

  "senescent-cells": {
    category: 'enemies',
    architype: 'zombie horde',
    background: 'senescent-card.png',
    text: [
      'Senescent cells are undead husks — old, broken cells that refuse to die. Instead of stepping aside, they linger, spewing toxic whispers (SASP signals) that poison nearby tissues.',
      'Their zombified presence fuels chronic inflammation, weakens allies, and creates fertile ground for disease and cancerous growths.',
      '*Strengths:*',
      'Difficult to kill — resistant to normal cell death signals.',
      'Spread chaos by releasing inflammatory toxins.',
      'Can corrupt and weaken the battlefield over time.',
      '*Weaknesses:*',
      'Not aggressive fighters — deal no direct damage themselves.',
      'Easily dispatched when targeted by NK cells or senolytic forces.',
      'Their presence makes them beacons for immune hunters.',
    ],
    battles: [],
  },
}

export const battles = {

  "Neutrophil-Footsoldier": {
    category: 'battle',
    background: 'neutrophils-arrive.png',
    text: [
      'The neutrophils are many in number, the most abundent immune cell of the body, and are the first to arrive at the battle. They charge to the enemy without thought and attack with brute force and high casualties.'
    ],
  },

  "Neutrophil-Extracellular-Traps": {
    category: 'battle',
    background: 'neutrophil-extracellular-trap.png',
    text: [
      'The neutrophil, failing to effectively combat the invaders, lays down nets (neutrophil extracellular traps) to slow and trap the invaders as a last stand.'
    ],
  },

  "NK-Handshake": {
    category: 'battle',
    background: 'nk-cancer-handshake.png',
    text: [
      'The natural killer cell gets up close and personal with a suspicious cell. If the cell does not greet the NKs hand shake satisfactory then the NK cell eliminates the defective / cancerous / infected cell.'
    ]
  },

  "Basophil-Activated": {
    category: 'battle',
    background: 'basophil-activated.png',
    text: [
      'Upon recognising an IgE antigen, the macrophage releases his toxic chemicals and alerts other immune cells to the danger.'
    ],
  },

  "Eosinophil-Parasite": {
    category: 'battle',
    background: 'eosinophil-parasite.png',
    text: [
      'The eosinophils are trained to fight a single type of pathogen, the parasite. They are the only ones that can do so effectively. It grabs a hold of the beast and uses its staff to drive granules into the parasites insides',
    ],
  },

  "Macrophage-Presenting": {
    category: 'battle',
    background: 'macrophage-presenting.png',
    text: [
      'Macrophage eats a pathogen and presents a part of it (the antigen) to a T Helper Cell.'
    ],
  },

  "Microglia-Surveillance": {
    category: 'battle',
    background: 'microglia-patroling.png',
    text: [
      'The microglia use their long tentacles to touch brain cells and check for damage, stress, infection, or need for pruning.',
      'They are also looking for pathogens and other toxins or debris to consume.',
    ]
  },

  "Dendritic-Scouting": {
    category: 'battle',
    background: 'dendritic-scouting.png',
    text: [
      'A dendritic scout discovers evidence of a pathogen and stores it in his histocompatibility complex (MHC) molecule then hurries off to report his findings to a T helper.'
    ],
  },

  "Plasma-Cannon": {
    category: 'battle',
    background: '',
    text: [
      'The plasma cells main weapon is auto-antibodies which it is continuously shooting out of its cannon when activated. These antibodies weaken and slow pathogens as well as helping other immune cells attack what they attatch to.'
    ],
  },

  "B-Memory-Multiplying": {
    category: 'battle',
    background: '',
    text: [
      'Memory Bs start multiplying as soon as they recognise an old foe.',
    ],
  },

  "Bregs-After-Battle": {
    category: 'battle',
    background: 'breg-after-battle.png',
    text: [
      'The Bregs downregulate the plasma Bs antibody firing capacity one the battle is won.',
    ],
  },

  "Treg-After-Battle": {
    category: 'battle',
    background: 'treg-after-battle.png',
    text: [
      'The Tregs lul the helper and killer Ts to sleep after battle, preventing them from causing unnecessary damage.'
    ],
  },

  "T-Helper-Commanding": {
    category: 'battle',
    background: 't-helper-commanding.png',
    text: [
      'The scout Dendritic cell relays information about the invading pathogen to the Commander T Helper cell in the form of an antigen.',
      'The T Helper then passed this information antigen to the T Killer cell and sends her on her way to the front line.'
    ]
  },

  "T-Memory-Re-Engaging": {
    category: 'battle',
    background: 't-mem-multiplies.png',
    text: [
      'Memory T recognizes a bacteria she previously fought and starts rapidly producing fresh T cells specialized in killing that pathogen.'
    ],
  },

  "T-Killer-Assassination": {
    category: 'battle',
    background: 't-killer-assassination.png',
    text: [
      'Killer T detects her target antigen during her MHC class I handshake with a cell infected with a virus.',
      'She uses her perforin blade laced with granzymes to eliminate the pathogen.'
    ],
  },

  "Virus-Infecting-Cell": {
    category: 'battle',
    background: 'virus-infecting-cell.png',
    text: [
      'The viraly infected cell becomes demon like and starts spitting out viral particles to nearby cells trying to infect them too.',
      'If these previously healthy cells become overwhelmed by viral particles they too will turn into demon like viral cells and go on to infect others potentially creating a chain reaction.'
    ],
  },

}
