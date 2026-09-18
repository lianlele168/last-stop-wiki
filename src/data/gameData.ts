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
}

export interface WeaponData {
  id: string;
  name: string;
  category: 'Firearms' | 'Melee' | 'Throwable' | 'Bus Turret';
  damage: number;
  fireRate: string;
  range: string;
  ammoType: string;
  tier: 'S' | 'A' | 'B' | 'C';
  description: string;
  bestUse: string;
}

export interface EnemyData {
  id: string;
  name: string;
  threatLevel: 'Boss' | 'Extreme' | 'High' | 'Medium' | 'Low';
  health: number;
  speed: string;
  dangerDescription: string;
  counterStrategy: string;
  lootDrop: string;
  milestoneSpawn: string;
}

export interface CodeItem {
  code: string;
  reward: string;
  tickets: number;
  status: 'active' | 'expired';
  verifiedDate: string;
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
  releaseDate: "August 2026 (Beta)",
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
    cons: ["Robux-exclusive unlock", "Thralls require line-of-sight command"]
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

export const FUEL_ITEMS: FuelItem[] = [
  {
    id: "fuel-canister",
    name: "Fuel Canister (Military Grade)",
    type: "Liquid Gasoline",
    distanceBoostMeters: 800,
    burnDurationSec: 120,
    efficiencyTier: "High",
    howToObtain: "Gas stations, military checkpoints, industrial outposts",
    icon: "Fuel"
  },
  {
    id: "raw-coal",
    name: "Refined Coal Chunk",
    type: "Solid Carbon",
    distanceBoostMeters: 400,
    burnDurationSec: 60,
    efficiencyTier: "Medium",
    howToObtain: "Mining crates, train stations, basement cellars",
    icon: "Flame"
  },
  {
    id: "wood-plank",
    name: "Reinforced Wood Plank",
    type: "Combustible Timber",
    distanceBoostMeters: 150,
    burnDurationSec: 25,
    efficiencyTier: "Low",
    howToObtain: "Dismantling furniture, suburban sheds, trees",
    icon: "TreePine"
  },
  {
    id: "scrap-food",
    name: "Expired Bio-Scrap / Food",
    type: "Emergency Organic",
    distanceBoostMeters: 50,
    burnDurationSec: 10,
    efficiencyTier: "Emergency",
    howToObtain: "Kitchen counters, garbage bins (Last resort fuel)",
    icon: "Apple"
  }
];

export const WEAPONS_DATA: WeaponData[] = [
  {
    id: "combat-shotgun",
    name: "Combat 12-Gauge Shotgun",
    category: "Firearms",
    damage: 180,
    fireRate: "Medium (1.2s)",
    range: "Short (8m)",
    ammoType: "12G Shells",
    tier: "S",
    description: "Devastating close-range weapon that clears doorway breaches in a single blast.",
    bestUse: "Repelling zombie climbers boarding the bus door."
  },
  {
    id: "hunting-rifle",
    name: "Scoped Hunting Rifle",
    category: "Firearms",
    damage: 240,
    fireRate: "Bolt-Action (1.8s)",
    range: "Extreme (60m)",
    ammoType: "7.62mm Rounds",
    tier: "S",
    description: "High-precision rifle that eliminates Acid Spitters and Brutes before they approach.",
    bestUse: "Roof sniping during open highway stretches."
  },
  {
    id: "tommy-gun",
    name: "Submachine Gun (Tommy)",
    category: "Firearms",
    damage: 45,
    fireRate: "Full-Auto (650 RPM)",
    range: "Medium (20m)",
    ammoType: "9mm Ammo",
    tier: "A",
    description: "High capacity drum magazine weapon that shreds dense swarms of sprinters.",
    bestUse: "Horde suppression during night cycles."
  },
  {
    id: "revolver",
    name: "Heavy Service Revolver",
    category: "Firearms",
    damage: 95,
    fireRate: "Semi-Auto (0.8s)",
    range: "Medium (25m)",
    ammoType: ".44 Magnum",
    tier: "B",
    description: "Reliable, high-impact handgun that one-shots standard walkers with headshots.",
    bestUse: "Scavenging sidearm with dependable stopping power."
  },
  {
    id: "spiked-sledge",
    name: "Spiked Sledgehammer",
    category: "Melee",
    damage: 130,
    fireRate: "Heavy Swing (1.5s)",
    range: "Melee (2.5m)",
    ammoType: "None",
    tier: "S",
    description: "Brutal two-handed blunt weapon that breaks zombie armor and knocks down groups.",
    bestUse: "Berserker class horde cleaving without wasting ammo."
  },
  {
    id: "reinforced-crowbar",
    name: "Hardened Steel Crowbar",
    category: "Melee",
    damage: 65,
    fireRate: "Fast Swing (0.7s)",
    range: "Melee (2.0m)",
    ammoType: "None",
    tier: "A",
    description: "Versatile scavenging tool that deals solid damage and cracks open locked crates.",
    bestUse: "Quiet scavenging runs and silent walker eliminations."
  },
  {
    id: "roof-turret",
    name: "Mounted Roof Auto-Turret",
    category: "Bus Turret",
    damage: 55,
    fireRate: "Rapid-Fire (500 RPM)",
    range: "360° (35m)",
    ammoType: "Turret Battery / Ammo Box",
    tier: "S",
    description: "Automated perimeter defense installed on the bus roof. Fires automatically at detected infected.",
    bestUse: "Continuous rear defense while survivors focus on refueling."
  },
  {
    id: "pipe-bomb",
    name: "Improvised Pipe Bomb",
    category: "Throwable",
    damage: 450,
    fireRate: "Throwable (3s fuse)",
    range: "AoE Blast (10m)",
    ammoType: "Consumable",
    tier: "A",
    description: "Beeping explosive that attracts zombies before detonating with massive shrapnel.",
    bestUse: "Clutch escape when the bus is surrounded at a roadblock."
  }
];

export const ENEMIES_DATA: EnemyData[] = [
  {
    id: "walker",
    name: "Shambling Walker",
    threatLevel: "Low",
    health: 100,
    speed: "Slow (3 m/s)",
    dangerDescription: "The common infected. Slow and weak alone, but dangerous when cluttering bus doorways.",
    counterStrategy: "Aim for the head with revolver or clean up with melee weapons to save ammo.",
    lootDrop: "Scrap cloth, 5-10 Tickets",
    milestoneSpawn: "0m - 95,000m (Everywhere)"
  },
  {
    id: "crawler",
    name: "Lurking Crawler",
    threatLevel: "Low",
    health: 60,
    speed: "Medium (4.5 m/s)",
    dangerDescription: "Low-profile infected that crawls under bus wheels and bites ankles during scavenging.",
    counterStrategy: "Look down while exiting the bus and use downward melee swings.",
    lootDrop: "Bones, Nails",
    milestoneSpawn: "0m - 50,000m"
  },
  {
    id: "sprinter",
    name: "Feral Sprinter",
    threatLevel: "High",
    health: 140,
    speed: "Very Fast (8.5 m/s)",
    dangerDescription: "Sprints in packs, capable of leaping through open bus windows and catching up to slow buses.",
    counterStrategy: "Keep windows barricaded and deploy stun traps or shotgun blasts at close range.",
    lootDrop: "Energy drink, 15-25 Tickets",
    milestoneSpawn: "10,000m - 95,000m (Night Heavy)"
  },
  {
    id: "acid-spitter",
    name: "Corrosive Spitter",
    threatLevel: "High",
    health: 220,
    speed: "Medium (4 m/s)",
    dangerDescription: "Hangs back and spits globes of green acid that melt bus metal plating and blind passengers.",
    counterStrategy: "Prioritize with Scoped Hunting Rifle before it can hit the bus furnace.",
    lootDrop: "Acid vial, 35 Tickets",
    milestoneSpawn: "25,000m - 95,000m"
  },
  {
    id: "armored-riot",
    name: "Armored Riot Guard",
    threatLevel: "High",
    health: 450,
    speed: "Medium (4.5 m/s)",
    dangerDescription: "Ex-police wearing ballistic helmets and riot shields. Bulletproof from the front.",
    counterStrategy: "Flank from behind, use Sledgehammer heavy blows, or ignite with Molotovs.",
    lootDrop: "Shotgun shells, Riot vest, 50 Tickets",
    milestoneSpawn: "30,000m - 80,000m"
  },
  {
    id: "the-brute",
    name: "Mutated Brute",
    threatLevel: "Extreme",
    health: 1500,
    speed: "Fast Charge (9 m/s)",
    dangerDescription: "Massive behemoth that charges into the bus front bumper, completely halting vehicle momentum.",
    counterStrategy: "Fire shotgun blasts into its glowing chest cavity and dodge its shoulder charge.",
    lootDrop: "Heavy scrap engine parts, 150 Tickets",
    milestoneSpawn: "45,000m - 95,000m"
  },
  {
    id: "night-stalker",
    name: "Night Stalker",
    threatLevel: "Extreme",
    health: 900,
    speed: "Teleport / Blur",
    dangerDescription: "Spawns only in pitch-black night fog. Snatches lone survivors who stray too far from bus headlights.",
    counterStrategy: "Stay within the UV searchlight beam; UV light stuns and strips its shadow armor.",
    lootDrop: "Shadow essence, 200 Tickets",
    milestoneSpawn: "50,000m - 95,000m (Night Only)"
  },
  {
    id: "highway-goliath",
    name: "Highway Goliath (Barricade Boss)",
    threatLevel: "Boss",
    health: 6000,
    speed: "Slow (3 m/s)",
    dangerDescription: "Guards the 30,000m Highway Overpass. Throws crushed cars and slams the bridge deck.",
    counterStrategy: "Use high ground on the bus roof, focus rifle fire on weak points, and keep the engine running.",
    lootDrop: "V8 Engine Upgrade, 500 Tickets, Heavy Armor Plate",
    milestoneSpawn: "30,000m Fixed Checkpoint"
  },
  {
    id: "depot-abomination",
    name: "Industrial Abomination",
    threatLevel: "Boss",
    health: 14000,
    speed: "Medium (5 m/s)",
    dangerDescription: "Guards the 60,000m Trainyard Depot. Summons endless waves of sprinters and spews acid clouds.",
    counterStrategy: "Activate Necromancer thralls to pull aggro while gunners unleash Tommy guns and auto-turrets.",
    lootDrop: "Military Gas Tank, 1,000 Tickets, Tier 3 Blueprints",
    milestoneSpawn: "60,000m Fixed Checkpoint"
  },
  {
    id: "final-overlord",
    name: "The Final Overlord (Gatekeeper)",
    threatLevel: "Boss",
    health: 28000,
    speed: "Aggressive (7 m/s)",
    dangerDescription: "The apocalyptic titan blocking the entrance to the 95,000m Final Evacuation Bunker.",
    counterStrategy: "All survivors must combine fire, deploy all pipe bombs, and ram the final blockade at max speed.",
    lootDrop: "Victory Badge, 5,000 Tickets, Legendary Survivor Title",
    milestoneSpawn: "95,000m The Final Stop"
  }
];

export const CODES_LIST: CodeItem[] = [
  {
    code: "Update2",
    reward: "750 Free Tickets",
    tickets: 750,
    status: "active",
    verifiedDate: "September 18, 2026",
    requirement: "Account level 5 required",
  },
  {
    code: "FRED",
    reward: "500 Free Tickets",
    tickets: 500,
    status: "active",
    verifiedDate: "September 18, 2026",
    requirement: "Account level 5 required",
  },
  {
    code: "UPDATE1",
    reward: "250 Free Tickets",
    tickets: 250,
    status: "active",
    verifiedDate: "September 18, 2026",
    requirement: "Account level 5 required",
  },
  {
    code: "Aliens",
    reward: "30 Alien Tokens",
    tickets: 0,
    status: "active",
    verifiedDate: "September 18, 2026",
    requirement: "Account level 5 required",
    note: "Pays Alien Tokens, a separate currency from Tickets",
  },
  {
    code: "AliensAreCool",
    reward: "Unspecified reward bundle",
    tickets: 0,
    status: "active",
    verifiedDate: "September 18, 2026",
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
    a: "Five codes were confirmed working on September 18, 2026. Three of them pay Tickets and together they are worth 1,500 Tickets: Update2 gives 750, FRED gives 500 and UPDATE1 gives 250. The Aliens code pays 30 Alien Tokens instead of Tickets, and AliensAreCool gives an unspecified reward bundle that the developer has not documented.",
  },
  {
    q: "What should I spend my Last Stop Tickets on?",
    a: "Tickets can only be spent in the lobby, so decide before you set off on a run. There are two outlets: unlocking crafting recipes that upgrade the bus (better armour, engines and turret mounts), or buying a whole new survivor class. If your bus is the thing dying first, buy recipes; if you are the one struggling to kill zombies, buy a class. Any Tickets you carry onto the road cannot be spent until you are back in the lobby.",
  },
  {
    q: "Where do new Last Stop codes get posted?",
    a: "The Hidden Route drops codes alongside major updates, bug fixes and community milestones rather than on a fixed schedule. The fastest official channels are the developer's Roblox group (The Hidden Route), their X account @HawkieDevRBX, and the YouTube channel @localModuled. The official Last Stop Discord has no dedicated codes channel, so announcements arrive scattered across general update posts — this page is re-checked daily so you do not have to trawl them.",
  },
];

export const MILESTONES_DATA: MilestoneItem[] = [
  {
    distance: "0m - 10,000m",
    name: "Suburban Outskirts",
    environment: "Overgrown residential houses, small sheds, abandoned sedans.",
    hazards: ["Shambling Walkers", "Lurking Crawlers", "Occasional night sprinters"],
    recommendedEngine: "Stock Engine (Lv 1)",
    keyRewards: ["Wood Planks", "Canned Food", "Starter Revolvers & Bandages"]
  },
  {
    distance: "10,000m - 30,000m",
    name: "Highway 95 Overpass",
    environment: "Multi-lane highway jammed with crashed trucks and roadblock barricades.",
    hazards: ["Sprinter packs", "Armored Riot Police", "Highway Goliath (30k Boss)"],
    recommendedEngine: "Tuned Engine (Lv 2)",
    keyRewards: ["Fuel Canisters", "Shotgun Shells", "Reinforced Cowcatcher Plate"]
  },
  {
    distance: "30,000m - 60,000m",
    name: "Industrial Trainyard Ruins",
    environment: "Rusted warehouses, chemical storage silos, freight train tracks.",
    hazards: ["Corrosive Spitters", "Mutated Brutes", "Depot Abomination (60k Boss)"],
    recommendedEngine: "Turbo Diesel (Lv 3)",
    keyRewards: ["High-Grade Coal", "Tommy Guns", "Roof Auto-Turret Blueprints"]
  },
  {
    distance: "60,000m - 90,000m",
    name: "The Dead Zone Wasteland",
    environment: "Crumbling highway pillars surrounded by impenetrable toxic night fog.",
    hazards: ["Night Stalkers (instant ambush)", "Berserk Hordes", "Acid rain damage"],
    recommendedEngine: "Supercharged V8 (Lv 4-5)",
    keyRewards: ["Military Canisters", "Hunting Rifles", "Titanium Hull Plating"]
  },
  {
    distance: "95,000m",
    name: "The Final Stop (Bunker Alpha)",
    environment: "Fortified military gate and blast doors leading to safe subterranean shelter.",
    hazards: ["The Final Overlord (28,000 HP)", "Endless Horde Wave"],
    recommendedEngine: "Maxed Engine + Full Cowcatcher",
    keyRewards: ["Endgame Victory Badge", "5,000 Tickets Bonus", "Survivor Mastery"]
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
    a: "The bus operates automatically on rails but requires continuous fuel in its rear furnace. You can throw Fuel Canisters (800m range), Coal Chunks (400m range), Wood Planks (150m range), or Bio-Food (50m range) into the furnace. If fuel runs dry, the bus halts and zombies will quickly swarm and breach the doors."
  },
  {
    q: "How far is the final stop in the game?",
    a: "The final stop is located exactly 95,000 meters from the start. You will pass major milestone checkpoints at 10,000m, 30,000m (Highway Boss), 60,000m (Trainyard Boss), and face the Final Overlord at 95,000m."
  },
  {
    q: "What happens if I get left behind by the bus?",
    a: "The bus does not stop automatically. If you stay too long looting a building, the bus will leave you behind in the zombie wasteland. If you have the Bus Driver or athletic boots you may catch up, but otherwise you will be overwhelmed by sprinters unless teammates drop you a defensive smoke or reverse."
  }
];
