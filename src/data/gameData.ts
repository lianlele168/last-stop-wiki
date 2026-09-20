export interface ClassData {
  id: string;
  name: string;
  stars: number;
  tier: 'S' | 'A' | 'B' | 'C' | 'D';
  cost: string;
  role: 'Combat' | 'Support' | 'Utility' | 'Defense';
  description: string;
  passive: string;
  startingGear: string[];
  levelBonuses: string[];
  pros: string[];
  cons: string[];
  /** Verification note: where this class data was confirmed (Sept 2026 data pass). */
  source?: string;
}

export interface FuelItem {
  id: string;
  name: string;
  type: string;
  distanceBoostMeters: number;
  burnDurationSec: number;
  efficiencyTier: 'High' | 'Medium' | 'Low' | 'Emergency';
  howToObtain: string;
  icon: string;
  /** Verification note for the fuel figures (Sept 2026 data pass). */
  source?: string;
}

export interface WeaponData {
  id: string;
  name: string;
  category: 'Firearms' | 'Melee' | 'Throwable' | 'Bus Turret';
  /** null = exact per-hit damage is not officially documented. */
  damage: number | null;
  fireRate: string;
  range: string;
  ammoType: string;
  tier: 'S' | 'A' | 'B' | 'C';
  description: string;
  bestUse: string;
  /** Verification note (Sept 2026 data pass). */
  source?: string;
}

export interface EnemyData {
  id: string;
  name: string;
  threatLevel: 'Boss' | 'Extreme' | 'High' | 'Medium' | 'Low';
  /** null = HP is not officially documented. */
  health: number | null;
  speed: string;
  dangerDescription: string;
  counterStrategy: string;
  lootDrop: string;
  milestoneSpawn: string;
  /** Verification note (Sept 2026 data pass). */
  source?: string;
}

export interface CodeItem {
  code: string;
  reward: string;
  tickets: number;
  status: 'active' | 'expired';

  /** Optional caveat rendered as a badge, e.g. new-server-only behaviour. */
  note?: string;
  /** Optional prerequisite, e.g. the account level gate on redemption. */
  requirement?: string;
}

export interface MilestoneItem {
  distance: string;
  name: string;
  environment: string;
  hazards: string[];
  recommendedEngine: string;
  keyRewards: string[];
}

export const GAME_INFO = {
  name: "Last Stop",
  developer: "The Hidden Route",
  platform: "Roblox",
  genre: "Co-op Vehicle Survival Horror",
  targetGoal: "95,000 Meters",
  releaseDate: " (Beta)",
  currency: "Tickets",
  socials: {
    roblox: "https://www.roblox.com",
    discord: "https://discord.gg",
  },
  controls: [
    { key: "Click / LMB", action: "Shoot / Attack / Pick Up" },
    { key: "Z", action: "Place Build / Attach Barricade to Bus" },
    { key: "E", action: "Equip / Interact / Refuel Furnace" },
    { key: "Q", action: "Drop Current Held Item" },
    { key: "R", action: "Reload Firearm" },
    { key: "TAB", action: "Open Survival Backpack" },
    { key: "Y", action: "Inspect Gear & Durability" },
  ]
};

export const CLASSES_DATA: ClassData[] = [
  {
    id: "necromancer",
    name: "Necromancer",
    stars: 5,
    tier: "S",
    cost: "899 Robux",
    role: "Combat",
    description: "The ultimate horde commander. Slayed infected rise as obedient armored minions that fight for your bus.",
    passive: "Reanimates defeated zombies into friendly thralls. Up to 10 minions at Level 3, which can be outfitted with salvaged armor.",
    startingGear: ["Grim Dagger", "Soul Lantern", "1x Minor Medkit"],
    levelBonuses: [
      "Lv 1: Up to 3 zombie thralls (50% max HP)",
      "Lv 2: Up to 6 zombie thralls, thralls can equip armor",
      "Lv 3: Up to 10 zombie thralls (100% max HP) with health regeneration"
    ],
    pros: ["Creates passive defensive buffer around bus", "Scales exponentially against large hordes", "Thralls absorb boss aggro"],
    cons: ["Robux-exclusive unlock", "Thralls require line-of-sight command"],
    source: "Checked Sept 2026: Sportskeeda Classes guide & GameZebo tier list (5 stars, 899 Robux, thrall scaling)."
  },
  {
    id: "ghoul",
    name: "Ghoul",
    stars: 5,
    tier: "S",
    cost: "18,000 Tickets",
    role: "Combat",
    description: "The corpse-eating rage engine. Food gives you no benefit — instead, devour zombie corpses to restore Hunger and charge a devastating Rage state.",
    passive: "Eating zombie corpses restores Hunger and builds Rage. While raging you take massively reduced damage, jump far higher, land crushing plunge attacks, and bite corpses dramatically faster. Food items no longer restore Hunger.",
    startingGear: ["No specialized starter gear"],
    levelBonuses: [
      "Lv 1: Rage lasts 30s, -40% damage taken, 2x jump height, +50 landing damage, 0.6s bite, +4% hunger and +5% rage per corpse",
      "Lv 2: Rage lasts 45s, -60% damage taken, 2.5x jump height, +75 landing damage, 0.4s bite, +7% hunger and +8% rage per corpse",
      "Lv 3: Rage lasts 60s, -80% damage taken, 3x jump height, +100 landing damage, 0.2s bite, +10% hunger and +12% rage per corpse"
    ],
    pros: ["Near-unkillable while raging (up to 80% damage reduction)", "Fully self-sufficient — never needs food supplies", "Ranked the best class in the game by Sportskeeda"],
    cons: ["Most expensive Ticket class (18,000)", "Must keep feeding on corpses to sustain Hunger and Rage", "Rage playstyle rewards risky melee dives into hordes"],
    source: "Checked Sept 2026: GameZebo tier list (Sep 9) full level table; Sportskeeda Classes guide (Sep 8) ranks Ghoul the best class; also covered by TechWiser and laststopmeta.com."
  },
  {
    id: "vampire",
    name: "Vampire",
    stars: 4,
    tier: "S",
    cost: "12,000 Tickets",
    role: "Combat",
    description: "A nocturnal stalker that completely avoids enemy detection at night while unleashing lethal lifesteal attacks.",
    passive: "Cannot use standard Medkits or Bandages. Enemies cannot sense your presence. Gains +40% Speed, +35% DMG, and 25% Lifesteal during nighttime.",
    startingGear: ["Vampiric Claws", "Night Shroud", "Dark Cloak"],
    levelBonuses: [
      "Lv 1: Night lifesteal 15%, +20% movement speed",
      "Lv 2: Night lifesteal 25%, +35% damage bonus",
      "Lv 3: Undetectable to Sprinters and Stalkers even in full darkness"
    ],
    pros: ["Immune to zombie stealth detection", "Insane survivability in night scavenging", "Never needs healing supplies"],
    cons: ["Very expensive ticket cost (12K)", "Cannot be healed by team Medics"]
  },
  {
    id: "medic",
    name: "Medic",
    stars: 1,
    tier: "S",
    cost: "1,000 Tickets",
    role: "Support",
    description: "The heartbeat of the survival squad. Heals allies twice as fast and grants permanent team health multipliers.",
    passive: "Uses Medkits and Bandages 2x faster when healing self or teammates. Grants +15% to +25% max health aura to all bus passengers.",
    startingGear: ["3x Sterile Bandages", "1x First Aid Kit", "Bone Scalpel"],
    levelBonuses: [
      "Lv 1: +15% Max HP, 50% faster revive speed",
      "Lv 2: +20% Max HP, healing grants temporary defense buff",
      "Lv 3: +25% Max HP, passive group regeneration while inside the bus"
    ],
    pros: ["Extremely affordable at 1,000 Tickets", "Mandatory for long 95,000m runs", "Saves huge amount of medical loot"],
    cons: ["Low initial combat damage output", "Relies on teammates for heavy fire support"]
  },
  {
    id: "bus-driver",
    name: "Bus Driver",
    stars: 2,
    tier: "A",
    cost: "1,500 Tickets",
    role: "Utility",
    description: "Master of momentum. Tunes the bus transmission for faster cruising speeds and reduced zombie climb windows.",
    passive: "Increases bus maximum cruising velocity by +30% and reduces zombie grip chance on doors and windows by 40%.",
    startingGear: ["Wrench", "Tire Iron", "Conductor's Cap"],
    levelBonuses: [
      "Lv 1: +15% bus cruising speed",
      "Lv 2: +25% bus cruising speed, 20% fuel efficiency bonus",
      "Lv 3: +30% bus speed, horn honk stuns nearby zombies for 3 seconds"
    ],
    pros: ["Shortens travel time to 95,000m by ~25%", "Reduces fuel consumption per kilometer", "Emergency horn stun"],
    cons: ["Faster speed requires faster scavenging response", "Vulnerable when off the bus"]
  },
  {
    id: "engineer",
    name: "Engineer",
    stars: 3,
    tier: "A",
    cost: "4,000 Tickets",
    role: "Defense",
    description: "Fortification specialist who repairs bus plating instantly and boosts mounted defense turrets.",
    passive: "Repairs damaged bus windows and armor 50% faster with 25% less scrap. Mounted roof turrets deal +25% damage.",
    startingGear: ["Heavy Blowtorch", "10x Scrap Metal", "Pipe Wrench"],
    levelBonuses: [
      "Lv 1: 30% faster repair speed",
      "Lv 2: 50% repair speed, +15% turret damage",
      "Lv 3: Deploys auto-repair drone inside the bus cabin"
    ],
    pros: ["Prevents bus hull breach during boss fights", "Maximizes turret DPS against hordes", "Crafts traps"],
    cons: ["Medium ticket investment", "Needs regular scrap material supplies"]
  },
  {
    id: "berserker",
    name: "Berserker",
    stars: 3,
    tier: "A",
    cost: "4,500 Tickets",
    role: "Combat",
    description: "High-octane melee brawler that cleaves through clusters of zombies without spending a single bullet.",
    passive: "Melee attacks deal +40% cleave damage and inflict severe bleeding. When dropping below 20% HP, enters 6-second invulnerable frenzy.",
    startingGear: ["Spiked Sledgehammer", "Bandit Mask", "Painkillers"],
    levelBonuses: [
      "Lv 1: +25% melee damage, 15% stamina reduction",
      "Lv 2: +40% melee damage, heavy cleave hits 3 targets",
      "Lv 3: Berserk frenzy triggers +50% movement speed and life recovery"
    ],
    pros: ["Zero ammo consumption", "Cleans bus doorway swarms instantly", "Invulnerability clutch mechanic"],
    cons: ["High risk of infection / damage in open field", "Weak against ranged Acid Spitters"]
  },
  {
    id: "marksman",
    name: "Marksman",
    stars: 2,
    tier: "B",
    cost: "2,500 Tickets",
    role: "Combat",
    description: "Pinpoint sniper designed to eliminate high-threat special infected before they can get close to the bus.",
    passive: "Headshots deal +50% critical damage. Scoped rifles cycle and reload 35% faster. Has built-in night vision zoom.",
    startingGear: ["Scout Hunting Rifle", "20x Rifle Ammo", "Binoculars"],
    levelBonuses: [
      "Lv 1: +30% headshot damage multiplier",
      "Lv 2: +50% headshot damage, scoped sway eliminated",
      "Lv 3: Piercing bullets pass through up to 2 zombies"
    ],
    pros: ["Safely neutralizes Acid Spitters from long range", "High ammo efficiency per kill", "Roof turret synergy"],
    cons: ["Ineffective when surrounded inside cabin", "Rifle ammo is rare in early suburbs"]
  },
  {
    id: "scavenger",
    name: "Scavenger",
    stars: 2,
    tier: "B",
    cost: "2,000 Tickets",
    role: "Utility",
    description: "Resource hoarder who extracts premium fuel canisters and rare weapon crates from abandoned buildings.",
    passive: "Increases rare loot drop rates by +25%. Carries 2 additional backpack slots and opens locked safes 2x faster with Crowbar.",
    startingGear: ["Hardened Crowbar", "Scavenger Rucksack", "Flashlight"],
    levelBonuses: [
      "Lv 1: +15% loot discovery chance, +1 backpack slot",
      "Lv 2: +25% loot discovery chance, +2 backpack slots",
      "Lv 3: Highlights fuel canisters and ammo through walls within 15 meters"
    ],
    pros: ["Significantly boosts coal and canister acquisition", "Allows team to hoard extra gear", "Finds rare rifles faster"],
    cons: ["Average combat stats", "Must leave the bus often to maximize value"]
  },
  {
    id: "heavy-tank",
    name: "Heavy Tank",
    stars: 3,
    tier: "B",
    cost: "3,500 Tickets",
    role: "Defense",
    description: "An armored behemoth who acts as the door guard, blocking zombie entry and absorbing boss strikes.",
    passive: "Innate +50 Armor plating. Immune to knockback effects and can body-block doorways while taking 40% reduced damage.",
    startingGear: ["Riot Shield", "Reinforced Baton", "Heavy Flak Vest"],
    levelBonuses: [
      "Lv 1: +25 bonus armor, 20% knockback resistance",
      "Lv 2: +50 bonus armor, shield bash stuns 3 enemies",
      "Lv 3: 40% damage reduction when standing in doorway"
    ],
    pros: ["Guarantees safe bus door defense", "Survives heavy boss hits", "Simple and effective playstyle"],
    cons: ["-15% base sprint speed", "Heavy armor drains sprint stamina quickly"]
  },
  {
    id: "chef",
    name: "Chef",
    stars: 1,
    tier: "C",
    cost: "1,200 Tickets",
    role: "Support",
    description: "Morale and nutrition expert. Turns basic canned food into survival stews that eliminate starvation and sanity drop.",
    passive: "Food processed in the furnace feeds all bus members simultaneously, providing double hunger replenishment and sanity boost.",
    startingGear: ["Meat Cleaver", "Camp Cookware", "3x Canned Beans"],
    levelBonuses: [
      "Lv 1: Food gives 50% bonus hunger saturation",
      "Lv 2: Stews grant +10% movement speed for 2 minutes",
      "Lv 3: Cooking food produces bio-fuel scraps for furnace"
    ],
    pros: ["Solves squad hunger mechanics forever", "Generates minor emergency fuel", "Cheap to unlock"],
    cons: ["Niche utility compared to pure healing or combat", "Hunger is easy to manage in early game"]
  },
  {
    id: "electrician",
    name: "Electrician",
    stars: 2,
    tier: "C",
    cost: "1,800 Tickets",
    role: "Utility",
    description: "Grid engineer who overclocks the bus's electrical system, deploying electrified perimeter wires and blinding searchlights.",
    passive: "Bus headlights shine 2x farther with wide-angle UV illumination, slowing nocturnal enemies by 30%. Can place shock traps.",
    startingGear: ["Shock Baton", "Wire Cutters", "2x Stun Traps"],
    levelBonuses: [
      "Lv 1: +50% headlight brightness and range",
      "Lv 2: Electrified bus door handles shock breaching zombies",
      "Lv 3: Stun traps arc electricity across 4 adjacent enemies"
    ],
    pros: ["Great night visibility and crowd control", "Safe defensive perimeter", "Affordable ticket cost"],
    cons: ["Shock traps have limited charges", "Lacks sustained burst damage"]
  },
  {
    id: "carpenter",
    name: "Carpenter",
    stars: 1,
    tier: "D",
    cost: "750 Tickets",
    role: "Defense",
    description: "Beginner builder who starts with raw wood materials to board up windows during the opening kilometers.",
    passive: "Starts every run with a Hammer and wood supplies (15 at Lv 1, 20 at Lv 2, 30 at Lv 3). Can reinforce wood barricades by 20%.",
    startingGear: ["Claw Hammer", "15x Wood Planks", "Nail Pouch"],
    levelBonuses: [
      "Lv 1: Starts with 15 Wood Planks",
      "Lv 2: Starts with 20 Wood Planks, +10% barricade HP",
      "Lv 3: Starts with 30 Wood Planks, hammer hits repair wood"
    ],
    pros: ["Lowest ticket price in the game (750 Tickets)", "Helpful for Day 1 beginners learning building mechanics"],
    cons: ["Wood is fragile against advanced zombies and bosses", "Quickly outclassed by Engineer in later stages"]
  }
];

/*
 * Sept 2026 verification pass: the developer has NOT published official per-item
 * fuel burn values. Guides (Sportskeeda beginner guide, allthings.how, GameZebo)
 * confirm fuel TYPES and their rough priority (Gas Can reserved for the burner,
 * coal keeps the furnace fed, food is last-resort) but no exact meter figures.
 * The distanceBoostMeters values below are community ESTIMATES used for modelling;
 * they are labelled as such wherever they are displayed.
 */
export const FUEL_ITEMS: FuelItem[] = [
  {
    id: "fuel-canister",
    name: "Fuel Canister (Gas Can)",
    type: "Liquid Gasoline",
    distanceBoostMeters: 800,
    burnDurationSec: 120,
    efficiencyTier: "High",
    howToObtain: "Gas stations along the route (first one reported around 3,000m), road stops and Terminals",
    icon: "Fuel",
    source: "Fuel type confirmed by Sportskeeda & allthings.how ('reserve every Gas Can for the burner'). ~800m per can is a community estimate, not an official value."
  },
  {
    id: "raw-coal",
    name: "Coal Chunk",
    type: "Solid Carbon",
    distanceBoostMeters: 400,
    burnDurationSec: 60,
    efficiencyTier: "Medium",
    howToObtain: "Mining crates, roadside buildings and sold by vendors at Terminals",
    icon: "Flame",
    source: "Fuel type confirmed by Sportskeeda & allthings.how ('keep the furnace burning with coal'). ~400m per chunk is a community estimate, not an official value."
  },
  {
    id: "wood-plank",
    name: "Wood Plank",
    type: "Combustible Timber",
    distanceBoostMeters: 150,
    burnDurationSec: 25,
    efficiencyTier: "Low",
    howToObtain: "Dismantling furniture and roadside buildings with the Hammer",
    icon: "TreePine",
    source: "Fuel type confirmed by community guides ('spare combustibles'). ~150m per plank is a community estimate, not an official value."
  },
  {
    id: "scrap-food",
    name: "Scrap Food",
    type: "Emergency Organic",
    distanceBoostMeters: 50,
    burnDurationSec: 10,
    efficiencyTier: "Emergency",
    howToObtain: "Kitchen counters and loot crates (last-resort furnace fuel; note that the Ghoul class gets no benefit from food)",
    icon: "Apple",
    source: "Food confirmed as furnace fuel by Sportskeeda beginner guide. ~50m per item is a community estimate, not an official value."
  }
];

/*
 * Sept 2026 verification pass: no reliable source (Sportskeeda, GameZebo, TechWiser,
 * fan wikis) publishes exact per-hit weapon damage for Last Stop, so every numeric
 * damage field is set to null / "not documented". Weapon archetypes, ammo types and
 * engagement ranges are community-reported; tier ratings are this site's editorial
 * ranking, not an official value.
 */
export const WEAPONS_DATA: WeaponData[] = [
  {
    id: "combat-shotgun",
    name: "Combat 12-Gauge Shotgun",
    category: "Firearms",
    damage: null,
    fireRate: "Pump-action, medium cycle",
    range: "Short (point-blank to bus door)",
    ammoType: "12G Shells",
    tier: "S",
    description: "Devastating close-range weapon that clears doorway breaches and boarding clusters in a single blast.",
    bestUse: "Repelling infected climbing aboard through the bus door.",
    source: "Archetype confirmed by community guides; exact damage not documented."
  },
  {
    id: "hunting-rifle",
    name: "Scoped Hunting Rifle",
    category: "Firearms",
    damage: null,
    fireRate: "Slow cycle between shots",
    range: "Extreme (long sightlines)",
    ammoType: "Rifle Rounds",
    tier: "S",
    description: "High-precision rifle for eliminating threats before they close on the bus.",
    bestUse: "Roof sniping during open road stretches and checkpoint halts.",
    source: "Archetype confirmed by community guides; exact damage not documented."
  },
  {
    id: "tommy-gun",
    name: "Submachine Gun (Tommy)",
    category: "Firearms",
    damage: null,
    fireRate: "Full-auto",
    range: "Medium",
    ammoType: "SMG Ammo",
    tier: "A",
    description: "High-capacity automatic weapon that shreds dense swarms of fast infected.",
    bestUse: "Horde suppression during night cycles and checkpoint defenses.",
    source: "Archetype confirmed by community guides; exact damage not documented."
  },
  {
    id: "service-pistol",
    name: "Service Pistol",
    category: "Firearms",
    damage: null,
    fireRate: "Semi-auto",
    range: "Medium",
    ammoType: "Pistol Rounds",
    tier: "B",
    description: "The Policeman class's starting sidearm, issued with a small round reserve that grows with class level.",
    bestUse: "Reliable early-run scavenging sidearm with cheap, common ammo.",
    source: "Confirmed via GameZebo class table (Policeman L1-L3: 15/20/30 rounds); exact damage not documented."
  },
  {
    id: "spiked-sledge",
    name: "Spiked Sledgehammer",
    category: "Melee",
    damage: null,
    fireRate: "Heavy swing",
    range: "Melee (~2.5m)",
    ammoType: "None",
    tier: "S",
    description: "Brutal two-handed blunt weapon that breaks through clusters without spending a bullet.",
    bestUse: "Melee-focused classes clearing doorway swarms and saving ammo.",
    source: "Archetype confirmed by community guides; exact damage not documented."
  },
  {
    id: "reinforced-crowbar",
    name: "Hardened Steel Crowbar",
    category: "Melee",
    damage: null,
    fireRate: "Fast swing",
    range: "Melee (~2m)",
    ammoType: "None",
    tier: "A",
    description: "Versatile scavenging tool that deals solid melee damage and doubles as a looting implement.",
    bestUse: "Quiet scavenging runs and conserving ammunition.",
    source: "Archetype confirmed by community guides; exact damage not documented."
  },
  {
    id: "graveyard-shovel",
    name: "Graveyard Shovel",
    category: "Melee",
    damage: null,
    fireRate: "Heavy swing",
    range: "Melee (~2m)",
    ammoType: "None",
    tier: "B",
    description: "The Gravedigger class's exclusive shovel that digs random items out of graves, usable as an emergency melee weapon.",
    bestUse: "Gravedigger loot farming loops near graveyard terrain.",
    source: "Confirmed via GameZebo class table (Gravedigger exclusive tool); exact damage not documented."
  },
  {
    id: "roof-turret",
    name: "Mounted Roof Auto-Turret",
    category: "Bus Turret",
    damage: null,
    fireRate: "Rapid-fire, auto-targeting",
    range: "360° around the bus roof",
    ammoType: "Turret Ammo Box",
    tier: "S",
    description: "Automated roof defense that fires on detected infected while survivors scavenge or refuel.",
    bestUse: "Continuous perimeter cover during furnace refuel stops.",
    source: "Bus turret mounts confirmed by community bus-upgrade guides; exact damage not documented."
  }
];

/*
 * Sept 2026 verification pass: the previous bestiary listed invented bosses
 * ("Highway Goliath 6,000 HP", "Industrial Abomination 14,000 HP", "Final Overlord
 * 28,000 HP") that no reliable source documents. Confirmed bosses in Last Stop are
 * Fred, Anubis and Dracula (badge records on laststopbus.wiki; Dracula's 9,000 HP
 * two-phase fight per laststopguide.wiki). Exact HP for regular infected and most
 * bosses is not officially published, so those fields are marked null / not documented.
 */
export const ENEMIES_DATA: EnemyData[] = [
  {
    id: "standard-infected",
    name: "Standard Infected",
    threatLevel: "Low",
    health: null,
    speed: "Slow walk, sprints in packs at night",
    dangerDescription: "The common zombie horde that prowls the entire route. Individually weak, but they swarm stopped buses and breach unboarded windows in large numbers.",
    counterStrategy: "Keep windows barricaded, keep the furnace burning so the bus never stalls, and clear door clusters with melee before switching to firearms.",
    lootDrop: "Scrap items and Tickets sold at Terminals (exact drops vary by run)",
    milestoneSpawn: "Entire route (0m - 95,000m)",
    source: "Zombie hordes confirmed by Sportskeeda beginner guide & allthings.how; exact per-type HP not documented by any reliable source."
  },
  {
    id: "dracula",
    name: "Dracula (Vampire Boss)",
    threatLevel: "Boss",
    health: 9000,
    speed: "Aggressive, grabs players on the road",
    dangerDescription: "A two-phase vampire boss encountered at the Graveyard. Dracula grabs survivors on the road and forces a \"Fight Back\" meter struggle before the proper fight begins.",
    counterStrategy: "Mash out of the road grab via the Fight Back meter, then burn down his two phases with your best sustained firepower while teammates revive grabbed survivors.",
    lootDrop: "Boss defeat badge: \"Defeat Dracula Boss!\" (added Sept 5, 2026)",
    milestoneSpawn: "Graveyard, near Checkpoint III",
    source: "Checked Sept 2026: laststopguide.wiki (9,000 HP, two phases, Graveyard) and Sportskeeda badges list (grab + Fight Back meter, Checkpoint III)."
  },
  {
    id: "anubis",
    name: "Anubis (Dungeon Boss)",
    threatLevel: "Boss",
    health: null,
    speed: "Unknown (dungeon encounter)",
    dangerDescription: "Hidden dungeon boss themed on the Anubis/Sphinx update. Defeating him awards the \"God Slayer\" badge. One recorded run opened the chamber roughly 23 minutes into the session, but spawn access is not fixed.",
    counterStrategy: "Bring full ammo reserves and healing before entering the dungeon chamber — the encounter is optional, so a squad that is low on supplies should skip it.",
    lootDrop: "Badge: \"God Slayer\" (Anubis defeat objective)",
    milestoneSpawn: "Hidden dungeon (location varies)",
    source: "Checked Sept 2026: laststopbus.wiki bosses page (God Slayer badge, dungeon timing caveat). HP not documented in any reliable source."
  },
  {
    id: "fred",
    name: "Fred (Final Stop Boss)",
    threatLevel: "Boss",
    health: null,
    speed: "Unknown (endgame encounter)",
    dangerDescription: "The deciding encounter at The Last Stop itself. Fred offers two endings: cure him with the potion for the peaceful ride ending, or defeat him in combat for the kill ending.",
    counterStrategy: "Decide your ending before the final stop. Preserve the cure potion if you want the Cure Fred ending; otherwise bring every stored weapon and explosive for the boss fight.",
    lootDrop: "Cure ending badge or kill ending badge (God Slayer-style objectives)",
    milestoneSpawn: "The Final Stop (95,000m)",
    source: "Checked Sept 2026: laststopbus.wiki Endings page (cure-vs-defeat outcomes) and laststop-roblox.wiki Cure Fred guide. HP not officially documented (~5,500 HP reports are unverified)."
  },
  {
    id: "nightmare-horde",
    name: "Nightmare Mode Horde",
    threatLevel: "Extreme",
    health: null,
    speed: "Empowered (permanent night)",
    dangerDescription: "Nightmare Mode runs permanent night with six-player squads, meaning every nocturnal threat is active for the whole 95,000m route and recorded boss HP bars apply to Dracula, Anubis and Fred.",
    counterStrategy: "Only enter Nightmare Mode with a full six-player squad, pre-planned fuel stops, and every window barricaded before the first nightfall.",
    lootDrop: "Nightmare completion bragging rights and badge progression",
    milestoneSpawn: "Nightmare Mode (whole route)",
    source: "Checked Sept 2026: laststopguide.wiki (permanent night, six-player squads, recorded boss HP bars)."
  }
];

export const CODES_LIST: CodeItem[] = [
  {
    code: "Update2",
    reward: "750 Free Tickets",
    tickets: 750,
    status: "active",
    
    requirement: "Account level 5 required",
  },
  {
    code: "FRED",
    reward: "500 Free Tickets",
    tickets: 500,
    status: "active",
    
    requirement: "Account level 5 required",
  },
  {
    code: "UPDATE1",
    reward: "250 Free Tickets",
    tickets: 250,
    status: "active",
    
    requirement: "Account level 5 required",
  },
  {
    code: "Aliens",
    reward: "30 Alien Tokens",
    tickets: 0,
    status: "active",
    
    requirement: "Account level 5 required",
    note: "Pays Alien Tokens, a separate currency from Tickets",
  },
  {
    code: "AliensAreCool",
    reward: "Unspecified reward bundle",
    tickets: 0,
    status: "active",
    
    requirement: "Account level 5 required",
    note: "Reported to work on new servers only",
  },
];

export const CODES_FAQS = [
  {
    q: "Why can't I redeem Last Stop codes?",
    a: "Almost always because of the level gate. Last Stop blocks code redemption until your account reaches level 5, so a brand-new account sees the code box but cannot claim anything. Play a few rounds and complete quests until you hit level 5, then return to the lobby. A second, less common cause is the AliensAreCool code, which is reported to work on new servers only — join a fresh or private server before trying that one.",
  },
  {
    q: "How many Last Stop codes are working right now?",
    a: "Five codes were confirmed working on . Three of them pay Tickets and together they are worth 1,500 Tickets: Update2 gives 750, FRED gives 500 and UPDATE1 gives 250. The Aliens code pays 30 Alien Tokens instead of Tickets, and AliensAreCool gives an unspecified reward bundle that the developer has not documented.",
  },
  {
    q: "What should I spend my Last Stop Tickets on?",
    a: "Tickets can only be spent in the lobby, so decide before you set off on a run. There are two outlets: unlocking crafting recipes that upgrade the bus (better armour, engines and turret mounts), or buying a whole new survivor class. If your bus is the thing dying first, buy recipes; if you are the one struggling to kill zombies, buy a class. Any Tickets you carry onto the road cannot be spent until you are back in the lobby.",
  },
  {
    q: "Where do new Last Stop codes get posted?",
    a: "The Hidden Route drops codes alongside major updates, bug fixes and community milestones rather than on a fixed schedule. The fastest official channels are the developer's Roblox group (The Hidden Route), their X account @HawkieDevRBX, and the YouTube channel @localModuled. The official Last Stop Discord has no dedicated codes channel, so announcements arrive scattered across general update posts — this page is re-checked against those sources so you do not have to trawl them.",
  },
];

/*
 * Sept 2026 verification pass: the route's exact zone boundaries are not officially
 * published. Documented landmarks are kept (first Gas Station ~3,000m and first
 * Terminal ~12,000m per last-stop.org; checkpoint gates with the Key/rescue/loot
 * loop per laststopguide.wiki; Dracula's Graveyard near Checkpoint III; the
 * 95,000m Final Stop per Sportskeeda). Everything else is labelled as community
 * estimates.
 */
export const MILESTONES_DATA: MilestoneItem[] = [
  {
    distance: "0m - 3,000m",
    name: "Opening Road",
    environment: "The stretch from spawn to the first Gas Station, where you learn the furnace loop.",
    hazards: ["Standard infected hordes", "Furnace running dry if nobody fuels", "Getting left behind while looting"],
    recommendedEngine: "Stock engine is fine — stockpile coal and wood",
    keyRewards: ["Coal", "Wood planks", "Starter weapons and barricade materials"]
  },
  {
    distance: "3,000m - 12,000m",
    name: "Road Stops & First Terminal",
    environment: "Gas stations and roadside buildings lead up to the first Terminal around 12,000m.",
    hazards: ["Infected packs around loot buildings", "Bus stalling during scavenging halts"],
    recommendedEngine: "Stock engine; keep 2-3 fuel units buffered",
    keyRewards: ["Sell loot at the Terminal", "Buy crafting recipes and classes", "Fuel restock"]
  },
  {
    distance: "12,000m - 60,000m",
    name: "Checkpoint Gates & Graveyard",
    environment: "Three checkpoint gates with a Key/rescue/loot loop between them; the Graveyard housing Dracula sits near Checkpoint III.",
    hazards: ["Dracula's road grab and two-phase fight (Graveyard)", "Checkpoint key hunts", "Night hordes while stopped"],
    recommendedEngine: "Keep fuel buffered; repair and re-arm at every gate",
    keyRewards: ["Checkpoint progression", "Dracula badge (\"Defeat Dracula Boss!\")", "Gate loot"]
  },
  {
    distance: "60,000m - 95,000m",
    name: "The Long Haul",
    environment: "The community-reported back stretch of the route, including entrances to hidden content such as the Anubis dungeon.",
    hazards: ["Optional dungeon encounters (Anubis / God Slayer badge)", "Ammo exhaustion before the final stop", "Night ambushes"],
    recommendedEngine: "Carry every spare fuel unit — refuel opportunities thin out",
    keyRewards: ["Anubis dungeon badge (\"God Slayer\")", "Rare dungeon loot"]
  },
  {
    distance: "95,000m",
    name: "The Final Stop",
    environment: "The end of the line at exactly 95,000m, where Fred awaits — cure him with the potion for the peaceful ending or fight him for the kill ending.",
    hazards: ["Fred final encounter", "Choosing the ending (cure vs kill)", "Surviving the approach with a depleted squad"],
    recommendedEngine: "Save one full fuel buffer for the final approach",
    keyRewards: ["Cure or kill ending badge", "Run completion", "Class and recipe progress carries on"]
  }
];

export const FAQS = [
  {
    q: "How do I redeem codes in Last Stop on Roblox?",
    a: "Launch Last Stop on Roblox, click the Settings (Gear) icon in the top-left or the Codes icon in the top-right, type in your code (e.g. FRED or UPDATE1) exactly as shown, and click the checkmark/claim button to immediately receive your free Tickets."
  },
  {
    q: "What is the best class to unlock first with Tickets?",
    a: "If playing solo or wanting high survivability, save up for the Medic (1,000 Tickets) or the Bus Driver (1,500 Tickets). If you have accumulated enough tickets, the Vampire (12,000 Tickets) is S-Tier due to its invisibility to zombies and nighttime lifesteal."
  },
  {
    q: "How does the bus fuel system work?",
    a: "The bus operates automatically on rails but requires continuous fuel in its rear furnace. You can throw Gas Cans, Coal Chunks, Wood Planks, or even Scrap Food into the furnace (the Ghoul class gets no benefit from food). The exact per-item meter values are not officially published — community estimates put a Gas Can at roughly 800m and Coal at roughly 400m per unit — so keep 2-3 fuel items buffered at all times. If fuel runs dry, the bus halts and zombies will quickly swarm and breach the doors."
  },
  {
    q: "How far is the final stop in the game?",
    a: "The final stop is located 95,000 meters from the start. Along the way you pass the first Gas Station (around 3,000m), the first Terminal (around 12,000m), three checkpoint gates with a Key/rescue/loot loop, the Graveyard where Dracula lurks near Checkpoint III, and finally Fred at the 95,000m Last Stop — where you choose between curing him or fighting him."
  },
  {
    q: "What happens if I get left behind by the bus?",
    a: "The bus does not stop automatically. If you stay too long looting a building, the bus will leave you behind in the zombie wasteland. If you have the Bus Driver or athletic boots you may catch up, but otherwise you will be overwhelmed by sprinters unless teammates drop you a defensive smoke or reverse."
  }
];
