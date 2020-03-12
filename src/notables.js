const notables = [
  {
    name: 'Prodigious Defence',
    image: 'assets/BlockAttackDmgNotable.png',
    stats: [
      '3% Chance to Block Spell Damage',
      '30% increased Attack Damage while holding a Shield',
      '+3% Chance to Block Attack Damage',
    ],
  },
  {
    name: 'Advance Guard',
    image: 'assets/HoldingShieldDamage.png',
    stats: [
      'Attack Skills deal 30% increased Damage while holding a Shield',
      'Ignore all Movement Penalties from Armour',
      '5% increased Movement Speed while holding a Shield',
    ],
  },
  {
    name: 'Gladiatorial Combat',
    image: 'assets/HoldingShieldDamage.png',
    stats: [
      '2% increased Attack Damage per 75 Armour or Evasion Rating on Shield',
      '+1% to Critical Strike Multiplier per 10 Maximum Energy Shield on Shield',
    ],
  },
  {
    name: 'Strike Leader',
    image: 'assets/BlockAttackDmgNotable.png',
    stats: [
      'Attack Skills deal 30% increased Damage while holding a Shield',
      '+2% Chance to Block Attack Damage',
      '+2 to Melee Strike Range while Holding a Shield',
    ],
  },
  {
    name: 'Powerful Ward',
    image: 'assets/BlockSpellDmgNotable.png',
    stats: [
      '20% chance to gain a Power Charge when you Block',
      '+6% Chance to Block Spell Damage while at Maximum Power Charges',
    ],
  },
  {
    name: 'Enduring Ward',
    image: 'assets/BlockAttackDmgNotable.png',
    stats: [
      '20% chance to gain an Endurance Charge when you Block',
      '+6% Chance to Block Attack Damage while at Maximum Endurance Charges',
    ],
  },
  {
    name: "Gladiator's Fortitude",
    image: 'assets/HoldingShieldDamage.png',
    stats: [
      'Attack Skills deal 25% increased Damage while holding a Shield',
      '5% increased maximum Life',
    ],
  },
  {
    name: 'Precise Retaliation',
    image: 'assets/BlockAttackDmgNotable.png',
    stats: [
      '80% increased Critical Strike Chance if you haven’t Blocked Recently',
      '+40% to Critical Strike Multiplier if you have Blocked Recently',
    ],
  },
  {
    name: 'Veteran Defender',
    image: 'assets/BlockAttackDmgNotable.png',
    stats: [
      '+15 to all Attributes',
      '+15% Elemental Resistances while holding a Shield',
      '60% increased Defences from Equipped Shield',
    ],
  },
  {
    name: 'Iron Breaker',
    image: 'assets/IncreasedPhysicalDamage.png',
    stats: [
      'Enemies have -10% to Total Physical Damage Reduction against your Hits',
      '35% increased Physical Damage',
    ],
  },
  {
    name: 'Deep Cuts',
    image: 'assets/IncreasedAttackDamageNotable.png',
    stats: [
      '15% chance to Impale Enemies on Hit with Attacks',
      'Impales you inflict last 1 additional Hit',
    ],
  },
  {
    name: 'Master the Fundamentals',
    image: 'assets/IncreasedPhysicalDamage.png',
    stats: [
      '+10% to all Elemental Resistances',
      '35% reduced Elemental Damage',
      '35% increased Physical Damage',
    ],
  },
  {
    name: 'Force Multiplier',
    image: 'assets/IncreasedPhysicalDamage.png',
    stats: ['5% chance to deal Double Damage', '25% increased Physical Damage'],
  },
  {
    name: 'Furious Assault',
    image: 'assets/IncreasedPhysicalDamage.png',
    stats: [
      '8% increased Attack and Cast Speed',
      '25% increased Physical Damage',
    ],
  },
  {
    name: 'Vicious Skewering',
    image: 'assets/IncreasedAttackDamageNotable.png',
    stats: [
      'Attacks have 10% chance to cause Bleeding',
      '10% chance to Impale Enemies on Hit with Attacks',
      '15% increased Effect of Impales inflicted by Hits that also inflict Bleeding',
    ],
  },
  {
    name: 'Grim Oath',
    image: 'assets/IncreasedPhysicalDamage.png',
    stats: ['Gain 10% of Physical Damage as Extra Chaos Damage'],
  },
  {
    name: 'Battle-Hardened',
    image: 'assets/IncreasedPhysicalDamage.png',
    stats: [
      '30% increased Evasion Rating and Armour',
      '35% increased Physical Damage',
    ],
  },
  {
    name: 'Replenishing Presence',
    image: 'assets/AuraEffectNotable.png',
    stats: [
      '8% increased effect of Non-Curse Auras from your Skills',
      'Auras from your Skills grant 0.2% of Life Regenerated per second to',
      'you and Allies',
    ],
  },
  {
    name: 'Master of Command',
    image: 'assets/AuraEffectNotable.png',
    stats: [
      '50% reduced Mana Reservation of Banner Skills',
      '15% increased Effect of Non-Curse Auras from your Skills on Enemies',
    ],
  },
  {
    name: 'First Among Equals',
    image: 'assets/AuraEffectNotable.png',
    stats: [
      '10% increased effect of Non-Curse Auras from your Skills',
      'Non-Curse Aura Skills have 20% increased Duration',
    ],
  },
  {
    name: 'Purposeful Harbinger',
    image: 'assets/AuraEffectNotable.png',
    stats: [
      '10% increased Effect of Auras on You for each Herald affecting you',
    ],
  },
  {
    name: 'Precise Commander',
    image: 'assets/AuraEffectNotable.png',
    stats: [
      'You and nearby Allies have 50% increased Critical Strike Chance',
      'You and nearby Allies have +15% to Critical Strike Multiplier',
    ],
  },
  {
    name: 'Pure Commander',
    image: 'assets/AuraEffectNotable.png',
    stats: [
      'Purity of Elements has 30% increased Aura Effect',
      'Purity of Fire has 30% increased Aura Effect',
      'Purity of Ice has 30% increased Aura Effect',
      'Purity of Lightning has 30% increased Aura Effect',
    ],
  },
  {
    name: 'Stalwart Commander',
    image: 'assets/AuraEffectNotable.png',
    stats: [
      'Grace has 30% increased Aura Effect',
      'Determination has 30% increased Aura Effect',
      'Discipline has 30% increased Aura Effect',
    ],
  },
  {
    name: 'Vengeful Commander',
    image: 'assets/AuraEffectNotable.png',
    stats: [
      'Anger has 30% increased Aura Effect',
      'Wrath has 30% increased Aura Effect',
      'Hatred has 30% increased Aura Effect',
    ],
  },
  {
    name: 'Skullbreaker',
    image: 'assets/IncreaseCritChanceNotable.png',
    stats: [
      '8% reduced Enemy Stun Threshold',
      '+20% to Critical Strike Multiplier',
    ],
  },
  {
    name: 'Pressure Points',
    image: 'assets/IncreaseCritChanceNotable.png',
    stats: [
      'Your Critical Strikes have a 5% chance to deal Double Damage',
      '40% increased Critical Strike Chance',
    ],
  },
  {
    name: 'Overwhelming Malice',
    image: 'assets/IncreaseCritChanceNotable.png',
    stats: ['10% chance to gain Unholy Might for 4 seconds on Critical Strike'],
  },
  {
    name: 'Magnifier',
    image: 'assets/AreaDmgNotable.png',
    stats: [
      '10% increased Area of Effect',
      '10% increased Area Damage',
      '+10% to Critical Strike Multiplier',
    ],
  },
  {
    name: 'Savage Response',
    image: 'assets/IncreaseCritChanceNotable.png',
    stats: [
      "+50% to Critical Strike Multiplier if you've taken a Savage Hit Recently",
      '40% increased Critical Strike Chance',
    ],
  },
  {
    name: 'Eye of the Storm',
    image: 'assets/IncreaseCritChanceNotable.png',
    stats: [
      '+20% to Damage over Time Multiplier for Ignite from Critical Strikes',
      '20% increased Effect of Chill you inflict with Critical Strikes',
      '20% increased Effect of Shock you inflict with Critical Strikes',
      '40% increased Critical Strike Chance',
    ],
  },
  {
    name: 'Basics of Pain',
    image: 'assets/IncreaseCritChanceNotable.png',
    stats: ['20% increased Damage', '30% increased Critical Strike Chance'],
  },
  {
    name: 'Quick Getaway',
    image: 'assets/IncreaseCritChanceNotable.png',
    stats: [
      '5% increased Attack and Cast Speed',
      "5% increased Movement Speed if you've dealt a Critical Strike Recently",
      '25% increased Critical Strike Chance',
    ],
  },
  {
    name: 'Assert Dominance',
    image: 'assets/AreaDmgNotable.png',
    stats: [
      '10% increased Area Damage',
      "15% increased Area of Effect if you've Killed Recently",
      "10% increased Area of Effect if you've Killed at least 5 Enemies Recently",
    ],
  },
  {
    name: 'Vast Power',
    image: 'assets/AreaDmgNotable.png',
    stats: [
      '20% increased Area Damage',
      '3% increased Area of Effect per Power Charge',
    ],
  },
  {
    name: 'Powerful Assault',
    image: 'assets/AreaDmgNotable.png',
    stats: [
      '20% increased Area Damage',
      'Area Skills have 10% chance to Knock Enemies Back on Hit',
    ],
  },
  {
    name: 'Intensity',
    image: 'assets/AreaDmgNotable.png',
    stats: [
      '10% increased Area Damage',
      'Skills supported by Intensify have +1 to maximum Intensity',
    ],
  },
  {
    name: 'Titanic Swings',
    image: 'assets/AreaDmgNotable.png',
    stats: [
      '20% increased Area Damage while wielding a Two Handed Melee Weapon',
      '15% increased Area of Effect while wielding a Two Handed Melee Weapon',
    ],
  },
  {
    name: 'Towering Threat',
    image: 'assets/AreaDmgNotable.png',
    stats: [
      '5% increased maximum Life',
      '10% increased Area of Effect',
      '3% increased Character Size',
    ],
  },
  {
    name: 'Ancestral Echo',
    image: 'assets/TotemDmgNotable.png',
    stats: [
      '20% increased Totem Placement speed',
      "10% increased Attack and Cast Speed if you've summoned a Totem Recently",
    ],
  },
  {
    name: 'Ancestral Reach',
    image: 'assets/TotemDmgNotable.png',
    stats: [
      '25% increased Totem Damage',
      '25% increased Totem Placement speed',
      '25% increased Totem Placement range',
    ],
  },
  {
    name: 'Ancestral Might',
    image: 'assets/TotemDmgNotable.png',
    stats: [
      '20% increased Totem Damage',
      '30% increased Totem Duration',
      "30% increased Totem Damage if you haven't Summoned a Totem in the past 2 seconds",
    ],
  },
  {
    name: 'Ancestral Preservation',
    image: 'assets/TotemDmgNotable.png',
    stats: [
      '30% increased Totem Life',
      'Totems have 10% additional Physical Damage Reduction',
      'Totems gain +40% to Chaos Resistance',
    ],
  },
  {
    name: 'Snaring Spirits',
    image: 'assets/TotemDmgNotable.png',
    stats: [
      '30% increased Totem Damage',
      'Totems Hinder Enemies near them when Summoned, with 25% reduced Movement Speed',
    ],
  },
  {
    name: 'Sleepless Sentries',
    image: 'assets/TotemDmgNotable.png',
    stats: [
      '20% increased Totem Damage',
      '20% increased Totem Duration',
      'Attack Skills have +1 to maximum number of Summoned Ballista Totems',
    ],
  },
  {
    name: 'Ancestral Guidance',
    image: 'assets/TotemDmgNotable.png',
    stats: [
      '30% increased Effect of Buffs granted by your Active Ancestor Totems',
      "Totems' Action Speed cannot be modified to below base value",
    ],
  },
  {
    name: 'Ancestral Inspiration',
    image: 'assets/TotemDmgNotable.png',
    stats: [
      'Gain Arcane Surge when you Summon a Totem',
      'Spells cast by Totems deal 25% increased Damage',
    ],
  },
  {
    name: 'Vital Focus',
    image: 'assets/DmgWhenChannelSkillsNotable.png',
    stats: [
      'Channelling Skills deal 30% increased Damage',
      'Regenerate 1.5% of Life per second while Channelling',
    ],
  },
  {
    name: 'Rapid Infusion',
    image: 'assets/DmgWhenChannelSkillsNotable.png',
    stats: [
      '50% increased Effect of Infusion',
      '5% increased Movement Speed while you have Infusion',
    ],
  },
  {
    name: 'Unwavering Focus',
    image: 'assets/DmgWhenChannelSkillsNotable.png',
    stats: [
      '40% chance to Avoid being Stunned while Channelling',
      'Channelling Skills deal 25% increased Damage',
      '15% reduced Mana Cost of Channelling Skills',
    ],
  },
  {
    name: 'Enduring Focus',
    image: 'assets/DmgWhenChannelSkillsNotable.png',
    stats: [
      'Channelling Skills deal 25% increased Damage',
      '25% chance to gain an Endurance Charge each second while Channelling',
    ],
  },
  {
    name: 'Precise Focus',
    image: 'assets/DmgWhenChannelSkillsNotable.png',
    stats: [
      '50% increased Critical Strike Chance while Channelling',
      "+30% to Critical Strike Multiplier if you've been Channelling for at least 1 second",
    ],
  },
  {
    name: 'Stoic Focus',
    image: 'assets/DmgWhenChannelSkillsNotable.png',
    stats: [
      '+4% Chance to Block Attack Damage while Channelling',
      '+4% Chance to Block Spell Damage while Channelling',
      'Channelling Skills deal 25% increased Damage',
    ],
  },
  {
    name: 'Hex Breaker',
    image: 'assets/DmgWhenChannelSkillsNotable.png',
    stats: [
      '8% increased Attack and Cast Speed while Channelling',
      'Immune to Curses while Channelling',
    ],
  },
  {
    name: 'Arcane Adept',
    image: 'assets/DmgWhenChannelSkillsNotable.png',
    stats: [
      '5% increased Attack and Cast Speed while Channelling',
      'Channelling Skills deal 20% increased Damage',
      'Gain Arcane Surge after Channelling for 1 second',
    ],
  },
  {
    name: 'Distilled Perfection',
    image: 'assets/LifeManaFlasksrecovery.png',
    stats: [
      '25% increased Life Recovery from Flasks',
      '25% increased Mana Recovery from Flasks',
      '20% increased Flask Effect Duration',
    ],
  },
  {
    name: 'Spiked Concoction',
    image: 'assets/FlaskDuration.png',
    stats: [
      'Flasks applied to you have 10% increased Effect',
      '5% increased Attack and Cast Speed during any Flask Effect',
    ],
  },
  {
    name: 'Fasting',
    image: 'assets/FlaskDuration.png',
    stats: [
      '20% increased Flask Charges gained',
      '20% increased Movement Speed while under no Flask Effects',
    ],
  },
  {
    name: "Mender's Wellspring",
    image: 'assets/LifeManaFlasksrecovery.png',
    stats: [
      '25% increased Life Recovery from Flasks',
      'Life Flasks gain 1 Charge every 3 seconds',
      'Remove Bleeding when you use a Life Flask',
    ],
  },
  {
    name: 'Special Reserve',
    image: 'assets/LifeManaFlasksrecovery.png',
    stats: [
      '20% increased Damage during any Flask Effect',
      'Regenerate 2% of Life per second during any Flask Effect',
    ],
  },
  {
    name: 'Numbing Elixir',
    image: 'assets/LifeManaFlasksrecovery.png',
    stats: [
      '25% increased Life Recovery from Flasks',
      '25% increased Mana Recovery from Flasks',
      '3% additional Physical Damage Reduction during Effect of any Life or Mana Flask',
    ],
  },
  {
    name: 'Mob Mentality',
    image: 'assets/IncreasedWarcryNotable.png',
    stats: [
      '20% increased Warcry Cooldown Recovery Speed',
      'You and nearby Party members gain 5 Rage when you Warcry',
    ],
  },
  {
    name: 'Cry Wolf',
    image: 'assets/IncreasedWarcryNotable.png',
    stats: [
      '30% increased Warcry Duration',
      'Warcries count as having 10 additional nearby Enemies',
      '30% increased Warcry Buff Effect',
    ],
  },
  {
    name: 'Haunting Shout',
    image: 'assets/IncreasedWarcryNotable.png',
    stats: [
      '20% increased Warcry Cooldown Recovery Speed',
      'Enemies Taunted by your Warcries are Intimidated',
      'Enemies Taunted by your Warcries are Unnerved',
    ],
  },
  {
    name: 'Lead By Example',
    image: 'assets/IncreasedWarcryNotable.png',
    stats: [
      "4% additional Physical Damage Reduction if you've Warcried in the past 8 seconds",
      "4% chance to deal Double Damage if you've Warcried in the past 8 seconds",
    ],
  },
  {
    name: 'Provocateur',
    image: 'assets/IncreasedWarcryNotable.png',
    stats: [
      '40% increased Critical Strike Chance against Taunted Enemies',
      '+15% to Critical Strike Multiplier against Taunted Enemies',
      '15% increased Warcry Buff Effect',
    ],
  },
  {
    name: 'Warning Call',
    image: 'assets/IncreasedWarcryNotable.png',
    stats: [
      '20% increased Warcry Cooldown Recovery Speed',
      "50% increased Melee Critical Strike Chance if you've Warcried Recently",
      "+35% to Melee Critical Strike Multiplier if you've Warcried Recently",
    ],
  },
  {
    name: 'Rattling Bellow',
    image: 'assets/IncreasedWarcryNotable.png',
    stats: [
      'Enemies Taunted by you take 5% increased Damage',
      'Warcry Skills have 40% increased Area of Effect',
    ],
  },
  {
    name: 'Bloodscent',
    image: 'assets/AxeandSwordDamage.png',
    stats: [
      'Attacks with Axes or Swords grant 1 Rage on Hit, no more than once every second',
    ],
  },
  {
    name: 'Run Through',
    image: 'assets/AxeandSwordDamage.png',
    stats: [
      'Axe or Sword Attacks deal 15% increased Damage with Ailments',
      '10% increased Impale Effect',
      '10% chance to Impale Enemies on Hit with Axes or Swords',
      '15% increased Physical Damage with Axes or Swords',
    ],
  },
  {
    name: 'Wound Aggravation',
    image: 'assets/AxeandSwordDamage.png',
    stats: [
      'Axe or Sword Attacks deal 20% increased Damage with Ailments',
      '20% increased Physical Damage with Axes or Swords',
      '+10% to Physical Damage over Time Multiplier while wielding an Axe or Sword',
    ],
  },
  {
    name: 'Overlord',
    image: 'assets/MaceandStaffDamage.png',
    stats: [
      '30% increased Damage with Maces, Sceptres or Staves',
      'Gain Fortify for 6 seconds on Melee Hit with a Mace, Sceptre or Staff',
    ],
  },
  {
    name: 'Expansive Might',
    image: 'assets/MaceandStaffDamage.png',
    stats: [
      'Mace, Sceptre or Staff Attacks deal 20% increased Damage with Hits and Ailments',
      'While stationary, gain 10% increased Area of Effect every second, up to a maximum of 50%',
    ],
  },
  {
    name: 'Weight Advantage',
    image: 'assets/MaceandStaffDamage.png',
    stats: [
      'Mace, Sceptre or Staff Attacks deal 30% increased Damage with Hits and Ailments',
      '4% chance to deal Double Damage while wielding a Mace, Sceptre or Staff',
      '+20 to Strength',
    ],
  },
  {
    name: 'Wind-up',
    image: 'assets/DaggerandClawDamage.png',
    stats: [
      '+15% to Critical Strike Multiplier with Claws or Daggers',
      '10% chance to gain a Power Charge on Non-Critical Strike with a Claw or Dagger',
    ],
  },
  {
    name: 'Fan of Blades',
    image: 'assets/DaggerandClawDamage.png',
    stats: [
      'Attack Skills fire an additional Projectile while wielding a Claw or Dagger',
      '20% increased Projectile Attack Damage with Claws or Daggers',
    ],
  },
  {
    name: 'Disease Vector',
    image: 'assets/DaggerandClawDamage.png',
    stats: [
      'Enemies Poisoned by you cannot Regenerate Life',
      '+10% to Damage over Time Multiplier for Poison while wielding a Claw or Dagger',
    ],
  },
  {
    name: 'Arcing Shot',
    image: 'assets/BowDamage.png',
    stats: [
      'Arrows gain Critical Strike Chance as they travel farther, up to 100% increased Critical Strike Chance',
      'Arrows gain Damage as they travel farther, dealing up to 50% increased Damage with Hits to targets',
    ],
  },
  {
    name: 'Tempered Arrowheads',
    image: 'assets/BowDamage.png',
    stats: [
      'Bow Skills have +10% to Damage over Time Multiplier',
      'Bow Skills have 20% increased Skill Effect Duration',
      '10% increased Duration of Ailments inflicted while wielding a Bow',
    ],
  },
  {
    name: 'Broadside',
    image: 'assets/BowDamage.png',
    stats: ['Bow Skills have 25% increased Area of Effect'],
  },
  {
    name: 'Explosive Force',
    image: 'assets/WandDamage.png',
    stats: [
      'Enemies killed by your Wand Hits have a 10% chance to Explode, dealing a quarter of their Life as Chaos Damage',
      'Gain 10% of Wand Physical Damage as Extra Chaos Damage',
    ],
  },
  {
    name: 'Opportunistic Fusilade',
    image: 'assets/WandDamage.png',
    stats: [
      '50% increased Critical Strike Chance with Wands',
      "35% increased Damage with Wands if you've dealt a Critical Strike Recently",
    ],
  },
  {
    name: "Storm's Hand",
    image: 'assets/WandDamage.png',
    stats: [
      'Gain 10% of Wand Physical Damage as Extra Lightning Damage',
      '25% of Wand Physical Damage converted to Lightning Damage',
    ],
  },
  {
    name: 'Battlefield Dominator',
    image: 'assets/TwoHandedMeleeDamage.png',
    stats: [
      'Attacks with Two Handed Weapons deal 25% increased Damage with Hits and Ailments',
      '10% reduced Enemy Stun Threshold',
      "15% increased Area of Effect if you've Stunned an Enemy with a Two Handed Melee Weapon Recently",
    ],
  },
  {
    name: 'Martial Mastery',
    image: 'assets/TwoHandedMeleeDamage.png',
    stats: [
      '10% increased Attack Speed with Two Handed Melee Weapons',
      '10% increased Attack Speed if you have at least 600 Strength',
      '+20 to Strength',
    ],
  },
  {
    name: 'Surefooted Striker',
    image: 'assets/TwoHandedMeleeDamage.png',
    stats: [
      '40% increased Critical Strike Chance with Two Handed Melee Weapons',
      "8% chance to deal Double Damage if you've dealt a Critical Strike with a Two Handed Melee Weapon Recently",
    ],
  },
  {
    name: 'Graceful Execution',
    image: 'assets/TwoHandedMeleeDamage.png',
    stats: [
      '5% increased Attack Speed with Two Handed Melee Weapons',
      '15% increased Accuracy Rating with Two Handed Melee Weapons',
      '25% increased Critical Strike Chance with Two Handed Melee Weapons',
      '+15 to Dexterity and Intelligence',
    ],
  },
  {
    name: 'Brutal Infamy',
    image: 'assets/TwoHandedMeleeDamage.png',
    stats: [
      '40% increased Damage with Hits and Ailments against Unique Enemies',
    ],
  },
  {
    name: 'Fearsome Warrior',
    image: 'assets/TwoHandedMeleeDamage.png',
    stats: [
      '8% increased Area of Effect',
      '25% chance to Intimidate nearby Enemies for 4 seconds on Melee Kill',
    ],
  },
  {
    name: 'Combat Rhythm',
    image: 'assets/DualWieldingDamage.png',
    stats: [
      "10% increased Attack Speed if you've Hit with your Main Hand Weapon Recently",
      "10% increased Movement Speed if you've Hit with your Off Hand Weapon Recently",
    ],
  },
  {
    name: 'Hit and Run',
    image: 'assets/DualWieldingDamage.png',
    stats: [
      'Attack Skills deal 20% increased Damage while Dual Wielding',
      "4% chance to Dodge Attack or Spell Hits if you've Hit an Enemy Recently",
    ],
  },
  {
    name: 'Insatiable Killer',
    image: 'assets/DualWieldingDamage.png',
    stats: [
      'Attack Skills deal 20% increased Damage while Dual Wielding',
      '5% increased Attack Speed while Dual Wielding',
      '5% chance to gain a Frenzy Charge on Kill while Dual Wielding',
    ],
  },
  {
    name: 'Mage Bane',
    image: 'assets/DualWieldingDamage.png',
    stats: [
      '+5% Chance to Block Spell Damage while Dual Wielding',
      'Attack Skills deal 20% increased Damage while Dual Wielding',
      '20% chance to gain a Power Charge when you Block',
    ],
  },
  {
    name: 'Martial Momentum',
    image: 'assets/DualWieldingDamage.png',
    stats: [
      '8% increased Attack Speed while Dual Wielding',
      '16% increased Accuracy Rating while Dual Wielding',
      "32% increased Damage if you've used a Travel Skill Recently",
    ],
  },
  {
    name: 'Deadly Repartee',
    image: 'assets/DualWieldingDamage.png',
    stats: [
      '+5% Chance to Block Attack Damage while Dual Wielding',
      'Attack Skills deal 25% increased Damage while Dual Wielding',
      '30% increased Attack Critical Strike Chance while Dual Wielding',
    ],
  },
  {
    name: 'Quick and Deadly',
    image: 'assets/DualWieldingDamage.png',
    stats: [
      '60% increased Main Hand Attack Damage while wielding two different Weapon Types',
      '30% increased Off Hand Attack Speed while wielding two different Weapon Types',
    ],
  },
  {
    name: 'Smite the Weak',
    image: 'assets/IncreasedAttackDamageNotable.png',
    stats: [
      '40% increased Attack Damage against Maimed Enemies',
      'Attacks have 10% chance to Maim on Hit',
    ],
  },
  {
    name: 'Heavy Hitter',
    image: 'assets/IncreasedAttackDamageNotable.png',
    stats: [
      '30% increased Attack Damage',
      '10% reduced Enemy Stun Threshold',
      '20% chance to double Stun Duration',
      '30% increased Damage with Ailments from Attack Skills',
    ],
  },
  {
    name: 'Martial Prowess',
    image: 'assets/IncreasedAttackDamageNotable.png',
    stats: [
      '20% increased Attack Damage',
      '6% increased Attack Speed',
      '15% increased Global Accuracy Rating',
      '20% increased Damage with Ailments from Attack Skills',
    ],
  },
  {
    name: 'Calamitous',
    image: 'assets/IncreasedAttackDamageNotable.png',
    stats: [
      '10% chance to Freeze, Shock and Ignite',
      '30% increased Elemental Damage with Attack Skills',
      '15% increased Effect of Non-Damaging Ailments',
    ],
  },
  {
    name: 'Devastator',
    image: 'assets/IncreasedAttackDamageNotable.png',
    stats: [
      '20% increased Attack Damage',
      '20% increased Damage with Ailments from Attack Skills',
      'Enemies killed by your Attack Hits have a 15% chance to Explode, dealing a tenth of their maximum Life as Physical Damage',
    ],
  },
  {
    name: 'Fuel the Fight',
    image: 'assets/IncreasedAttackDamageNotable.png',
    stats: [
      '8% increased Attack Speed',
      '0.4% of Attack Damage Leeched as Mana',
      '20% increased Damage while Leeching',
    ],
  },
  {
    name: 'Drive the Destruction',
    image: 'assets/IncreasedAttackDamageNotable.png',
    stats: [
      '0.8% of Attack Damage Leeched as Life',
      '20% increased Maximum total Recovery per second from Life Leech',
      '20% increased total Recovery per second from Life Leech',
    ],
  },
  {
    name: 'Feed the Fury',
    image: 'assets/IncreasedAttackDamageNotable.png',
    stats: [
      '0.4% of Attack Damage Leeched as Life',
      '30% increased Damage while Leeching',
      '15% increased Attack Speed while Leeching',
    ],
  },
  {
    name: 'Seal Mender',
    image: 'assets/IncreasedSpellDamageNotable.png',
    stats: [
      'Skills Supported by Unleash have 30% increased Seal gain frequency',
    ],
  },
  {
    name: 'Conjured Wall',
    image: 'assets/IncreasedSpellDamageNotable.png',
    stats: [
      '25% increased Spell Damage',
      "+6% Chance to Block Spell Damage if you've Cast a Spell Recently",
    ],
  },
  {
    name: 'Arcane Heroism',
    image: 'assets/IncreasedSpellDamageNotable.png',
    stats: [
      '30% increased Effect of Arcane Surge on you',
      '10% chance to gain Arcane Surge when you Hit a Unique enemy',
    ],
  },
  {
    name: 'Practiced Caster',
    image: 'assets/IncreasedSpellDamageNotable.png',
    stats: [
      '20% increased Spell Damage',
      '5% increased Cast Speed',
      '35% chance to Avoid interruption from Stuns while Casting',
    ],
  },
  {
    name: 'Burden Projection',
    image: 'assets/IncreasedSpellDamageNotable.png',
    stats: [
      '30% increased Spell Damage',
      '8% chance to Knock Enemies Back on Hit with Spell Damage',
    ],
  },
  {
    name: 'Thaumophage',
    image: 'assets/IncreasedSpellDamageNotable.png',
    stats: [
      '0.6% of Spell Damage Leeched as Energy Shield',
      '20% increased Maximum total Recovery per second from Energy Shield Leech',
      '10% chance to Hinder Enemies on Hit with Spells, with 30% reduced Movement Speed',
    ],
  },
  {
    name: 'Essence Rush',
    image: 'assets/IncreasedSpellDamageNotable.png',
    stats: [
      '40% increased Damage while Leeching Energy Shield',
      '0.3% of Spell Damage Leeched as Energy Shield',
      '5% increased Attack and Cast Speed while Leeching Energy Shield',
    ],
  },
  {
    name: 'Sap Psyche',
    image: 'assets/IncreasedSpellDamageNotable.png',
    stats: [
      '20% increased Spell Damage',
      '30% increased Mana Regeneration Rate',
      'Regenerate 1% of Energy Shield per second if you’ve Cursed an Enemy Recently',
    ],
  },
  {
    name: 'Sadist',
    image: 'assets/IncreasedElementalDamage.png',
    stats: [
      "15% increased Elemental Damage if you've Chilled an Enemy Recently",
      "20% increased Elemental Damage if you've Ignited an Enemy Recently",
      "25% increased Elemental Damage if you've Shocked an Enemy Recently",
    ],
  },
  {
    name: 'Corrosive Elements',
    image: 'assets/IncreasedElementalDamage.png',
    stats: [
      '15% increased Elemental Damage',
      'Cold Skills have a 25% chance to apply Cold Exposure on Hit',
      'Fire Skills have a 25% chance to apply Fire Exposure on Hit',
      'Lightning Skills have a 25% chance to apply Lightning Exposure on Hit',
    ],
  },
  {
    name: "Doryani's Lesson",
    image: 'assets/IncreasedElementalDamage.png',
    stats: [
      '0.2% of Elemental Damage Leeched as Life',
      '25% increased Elemental Damage',
    ],
  },
  {
    name: 'Disorienting Display',
    image: 'assets/IncreasedElementalDamage.png',
    stats: [
      '25% increased Elemental Damage',
      '10% chance to Blind nearby Enemies when you use an Elemental Skill',
    ],
  },
  {
    name: 'Prismatic Heart',
    image: 'assets/IncreasedElementalDamage.png',
    stats: [
      '+10% to all Elemental Resistances',
      '30% increased Elemental Damage',
    ],
  },
  {
    name: 'Widespread Destruction',
    image: 'assets/IncreasedElementalDamage.png',
    stats: ['10% increased Area of Effect', '20% increased Elemental Damage'],
  },
  {
    name: 'Master of Fire',
    image: 'assets/IncreasedFireDamage.png',
    stats: ['Nearby Enemies have Fire Exposure'],
  },
  {
    name: 'Smoking Remains',
    image: 'assets/IncreasedFireDamage.png',
    stats: [
      '35% increased Fire Damage',
      '10% chance to create a Smoke Cloud on Kill',
    ],
  },
  {
    name: 'Cremator',
    image: 'assets/IncreasedFireDamage.png',
    stats: [
      '30% increased Fire Damage',
      'Ignited Enemies you hit are destroyed on Kill',
    ],
  },
  {
    name: 'Snowstorm',
    image: 'assets/IncreasedLightningDamage.png',
    stats: [
      'Gain 10% of Lightning Damage as Extra Cold Damage against Chilled Enemies',
    ],
  },
  {
    name: 'Storm Drinker',
    image: 'assets/IncreasedLightningDamage.png',
    stats: [
      'Damage Penetrates 8% Lightning Resistance',
      '0.5% of Lightning Damage Leeched as Energy Shield',
    ],
  },
  {
    name: 'Paralysis',
    image: 'assets/IncreasedLightningDamage.png',
    stats: [
      '30% increased Lightning Damage',
      '10% chance to double Stun Duration',
      'Lightning Skills have 10% reduced Enemy Stun Threshold',
    ],
  },
  {
    name: 'Supercharge',
    image: 'assets/IncreasedLightningDamage.png',
    stats: ['Lightning Damage with Non-Critical Strikes is Lucky'],
  },
  {
    name: 'Blanketed Snow',
    image: 'assets/IncreasedColdDamage.png',
    stats: ['Damage Penetrates 10% Cold Resistance against Chilled Enemies'],
  },
  {
    name: 'Cold to the Core',
    image: 'assets/IncreasedColdDamage.png',
    stats: [
      '1% increased Cold Damage per 25 Dexterity',
      '1% increased Cold Damage per 25 Intelligence',
      '1% increased Cold Damage per 25 Strength',
    ],
  },
  {
    name: 'Cold-Blooded Killer',
    image: 'assets/IncreasedColdDamage.png',
    stats: ['20% increased Cold Damage', 'Recover 2% of Life on Kill'],
  },
  {
    name: 'Touch of Cruelty',
    image: 'assets/IncreasedChaosDamage.png',
    stats: [
      'Chaos Skills have 10% chance to Hinder Enemies on Hit, with 30% reduced Movement Speed',
      'Enemies Hindered by you take 10% increased Chaos Damage',
    ],
  },
  {
    name: 'Unwaveringly Evil',
    image: 'assets/IncreasedChaosDamage.png',
    stats: [
      '30% increased Chaos Damage',
      'Chaos Skills ignore interruption from Stuns',
    ],
  },
  {
    name: 'Unspeakable Gifts',
    image: 'assets/IncreasedChaosDamage.png',
    stats: [
      'Enemies you Kill have a 10% chance to Explode, dealing a quarter of their maximum Life as Chaos Damage',
    ],
  },
  {
    name: 'Dark Ideation',
    image: 'assets/IncreasedChaosDamage.png',
    stats: [
      '2% increased Chaos Damage per 100 maximum Mana, up to a maximum of 80%',
    ],
  },
  {
    name: 'Unholy Grace',
    image: 'assets/IncreasedChaosDamage.png',
    stats: [
      '30% increased Chaos Damage',
      '10% increased Attack and Cast Speed',
    ],
  },
  {
    name: 'Wicked Pall',
    image: 'assets/IncreasedChaosDamage.png',
    stats: [
      '35% increased Chaos Damage',
      '20% increased Skill Effect Duration',
    ],
  },
  {
    name: 'Renewal',
    image: 'assets/IncreasedMinionDamageNotable.png',
    stats: [
      'Minions Regenerate 1% of Life per second',
      'Minions have 10% chance to deal Double Damage while they are on Full Life',
    ],
  },
  {
    name: 'Raze and Pillage',
    image: 'assets/IncreasedMinionDamageNotable.png',
    stats: [
      'Minions have 20% chance to Ignite',
      'Minions deal 20% increased Damage against Ignited Enemies',
      'Minions gain 6% of Physical Damage as Extra Fire Damage',
    ],
  },
  {
    name: 'Rotten Claws',
    image: 'assets/IncreasedMinionDamageNotable.png',
    stats: ['Minions have a 20% chance to Impale on Hit with Attacks'],
  },
  {
    name: 'Call to the Slaughter',
    image: 'assets/IncreasedMinionDamageNotable.png',
    stats: [
      'Minions deal 15% increased Damage',
      'Minions created Recently have 10% increased Attack and Cast Speed',
      'Minions created Recently have 30% increased Movement Speed',
    ],
  },
  {
    name: 'Skeletal Atrophy',
    image: 'assets/IncreasedMinionDamageNotable.png',
    stats: [
      'Summoned Skeletons have 10% chance to Wither Enemies for 2 seconds on Hit',
      'Summoned Skeletons have 30% of Physical Damage Converted to Chaos Damage',
    ],
  },
  {
    name: 'Hulking Corpses',
    image: 'assets/IncreaseMinionLifeNotable.png',
    stats: [
      'Minions have 20% increased maximum Life',
      '20% increased Raised Zombie Size',
      'Raised Zombies have 5% chance to Taunt Enemies on Hit',
    ],
  },
  {
    name: 'Vicious Bite',
    image: 'assets/IncreasedMinionDamageNotable.png',
    stats: [
      'Minions have 50% increased Critical Strike Chance',
      'Raised Spectres, Raised Zombies, and Summoned Skeletons have +50% to Critical Strike Multiplier',
    ],
  },
  {
    name: 'Primordial Bond',
    image: 'assets/IncreasedMinionDamageNotable.png',
    stats: [
      '10% increased Damage per Summoned Golem',
      '40% increased Effect of Buffs granted by your Golems',
      'Golems have 25% increased Maximum Life',
    ],
  },
  {
    name: 'Blowback',
    image: 'assets/FireDamageOverTimeNotable.png',
    stats: ['Ignites you inflict deal Damage 15% faster'],
  },
  {
    name: 'Fan the Flames',
    image: 'assets/FireDamageOverTimeNotable.png',
    stats: [
      'Ignites you inflict spread to other Enemies within a Radius of 15',
    ],
  },
  {
    name: 'Cooked Alive',
    image: 'assets/FireDamageOverTimeNotable.png',
    stats: [
      '15% chance to Ignite',
      'Enemies Ignited by you have -10% to Fire Resistance',
    ],
  },
  {
    name: 'Burning Bright',
    image: 'assets/FireDamageOverTimeNotable.png',
    stats: [
      '+8% to Fire Damage over Time Multiplier',
      '20% increased Fire Damage',
      '8% increased Area of Effect',
    ],
  },
  {
    name: 'Wrapped in Flame',
    image: 'assets/FireDamageOverTimeNotable.png',
    stats: [
      '20% increased Burning Damage',
      '+15% to Fire Damage over Time Multiplier while Burning',
      'Regenerate 1.50% of Life per second while Burning',
    ],
  },
  {
    name: 'Vivid Hues',
    image: 'assets/PhysicalDamageOverTimeNotable.png',
    stats: [
      '+12% to Damage over Time Multiplier for Bleeding',
      '2% of Attack Damage Leeched as Life against Bleeding Enemies',
      '20% increased total Recovery per second from Life Leech',
    ],
  },
  {
    name: 'Rend',
    image: 'assets/PhysicalDamageOverTimeNotable.png',
    stats: [
      '+12% to Damage over Time Multiplier for Bleeding',
      '30% increased Bleeding Duration',
    ],
  },
  {
    name: 'Disorienting Wounds',
    image: 'assets/PhysicalDamageOverTimeNotable.png',
    stats: [
      '25% increased Damage with Bleeding',
      '25% chance to Blind with Hits against Bleeding Enemies',
    ],
  },
  {
    name: 'Compound Injury',
    image: 'assets/PhysicalDamageOverTimeNotable.png',
    stats: ['50% increased Damage with Bleeding you inflict on Maimed Enemies'],
  },
  {
    name: 'Septic Spells',
    image: 'assets/ChaosDamageOverTimeNotable.png',
    stats: [
      '8% increased Cast Speed',
      'Spell Skills have +10% to Damage over Time Multiplier for Poison',
      '20% chance to Poison on Hit with Spell Damage',
    ],
  },
  {
    name: 'Low Tolerance',
    image: 'assets/ChaosDamageOverTimeNotable.png',
    stats: [
      '+8% to Damage over Time Multiplier for Poison',
      'Poisons you inflict on non-Poisoned Enemies deal 300% increased Damage',
    ],
  },
  {
    name: 'Steady Torment',
    image: 'assets/ChaosDamageOverTimeNotable.png',
    stats: [
      '20% increased Poison Duration',
      '20% increased Bleeding Duration',
      '+10% to Damage over Time Multiplier for Bleeding you inflict on Poisoned Enemies',
      '+10% to Damage over Time Multiplier for Poison you inflict on Bleeding Enemies',
    ],
  },
  {
    name: 'Eternal Suffering',
    image: 'assets/ChaosDamageOverTimeNotable.png',
    stats: [
      '+5% to Chaos Damage over Time Multiplier',
      'Chaos Skills have 30% increased Skill Effect Duration',
    ],
  },
  {
    name: 'Eldritch Inspiration',
    image: 'assets/ChaosDamageOverTimeNotable.png',
    stats: [
      '+8% to Chaos Damage over Time Multiplier',
      '16% increased maximum Mana',
      '20% increased Mana Regeneration Rate',
    ],
  },
  {
    name: 'Wasting Affliction',
    image: 'assets/DamageOverTimeNotable.png',
    stats: [
      '20% increased Damage with Ailments',
      'Damaging Ailments deal damage 10% faster',
    ],
  },
  {
    name: 'Haemorrhage',
    image: 'assets/DamageOverTimeNotable.png',
    stats: [
      '+18% to Damage over Time Multiplier for Ailments from Critical Strikes',
      '40% increased Critical Strike Chance',
    ],
  },
  {
    name: 'Flow of Life',
    image: 'assets/DamageOverTimeNotable.png',
    stats: [
      '24% increased Damage over Time',
      '4% increased maximum Life',
      'Regenerate 0.6% of Life per second',
    ],
  },
  {
    name: 'Exposure Therapy',
    image: 'assets/DamageOverTimeNotable.png',
    stats: [
      '+10% to Damage over Time Multiplier',
      '+30% Chaos Resistance against Damage Over Time',
    ],
  },
  {
    name: 'Brush with Death',
    image: 'assets/DamageOverTimeNotable.png',
    stats: [
      '+10% to Damage over Time Multiplier',
      'Recover 1% of Life on Kill',
      'Recover 1% of Energy Shield on Kill',
    ],
  },
  {
    name: 'Vile Reinvigoration',
    image: 'assets/DamageOverTimeNotable.png',
    stats: [
      '24% increased Damage over Time',
      '6% increased maximum Energy Shield',
      'Regenerate 2% of Energy Shield per second if you’ve Killed an Enemy Recently',
    ],
  },
  {
    name: 'Circling Oblivion',
    image: 'assets/DamageOverTimeNotable.png',
    stats: [
      '20% increased Damage over Time',
      '20% increased Duration of Ailments on Enemies',
      '15% increased Skill Effect Duration',
    ],
  },
  {
    name: 'Brewed for Potency',
    image: 'assets/DamageOverTimeNotable.png',
    stats: [
      '24% increased Damage over Time',
      '10% increased Flask Charges gained',
      '20% increased Life and Mana Recovery from Flasks',
    ],
  },
  {
    name: 'Astonishing Affliction',
    image: 'assets/IncreasedNonDamageAilmentNotable.png',
    stats: [
      '20% increased Duration of Elemental Ailments on Enemies',
      '20% increased Damage with Hits and Ailments against Enemies affected by Ailments',
      '20% increased Effect of Non-Damaging Ailments',
    ],
  },
  {
    name: 'Cold Conduction',
    image: 'assets/IncreasedNonDamageAilmentNotable.png',
    stats: [
      'Enemies Chilled by your Hits are Shocked',
      'Enemies Shocked by your Hits are Chilled',
    ],
  },
  {
    name: 'Inspired Oppression',
    image: 'assets/IncreasedNonDamageAilmentNotable.png',
    stats: [
      '20% increased Elemental Damage',
      '30% increased Mana Regeneration Rate if you have Frozen an Enemy Recently',
      '30% increased Mana Regeneration Rate if you have Shocked an Enemy Recently',
      '10% increased Effect of Non-Damaging Ailments',
    ],
  },
  {
    name: 'Chilling Presence',
    image: 'assets/IncreasedNonDamageAilmentNotable.png',
    stats: ['Nearby Enemies are Chilled'],
  },
  {
    name: 'Deep Chill',
    image: 'assets/IncreasedNonDamageAilmentNotable.png',
    stats: [
      '+10% to Cold Damage over Time Multiplier',
      '30% increased Effect of Chill',
    ],
  },
  {
    name: 'Blast-Freeze',
    image: 'assets/IncreasedNonDamageAilmentNotable.png',
    stats: [
      '20% increased Cold Damage',
      'Freezes you inflict spread to other Enemies within a Radius of 12',
    ],
  },
  {
    name: 'Thunderstruck',
    image: 'assets/IncreasedNonDamageAilmentNotable.png',
    stats: [
      '20% increased Lightning Damage',
      'Your Critical Strikes Knock Back Shocked Enemies',
      '30% increased Critical Strike Chance',
    ],
  },
  {
    name: 'Stormrider',
    image: 'assets/IncreasedNonDamageAilmentNotable.png',
    stats: [
      '10% chance to gain a Power Charge when you Shock a Chilled Enemy',
      '25% increased Cold Damage with Hits against Shocked Enemies',
      '25% increased Lightning Damage with Hits against Chilled Enemies',
    ],
  },
  {
    name: 'Overshock',
    image: 'assets/IncreasedNonDamageAilmentNotable.png',
    stats: [
      '30% increased Lightning Damage',
      'Your Shocks can increase Damage taken by up to a maximum of 60%',
      '30% increased Effect of Shock',
    ],
  },
  {
    name: 'Evil Eye',
    image: 'assets/CurseEffectNotable.png',
    stats: [
      'Enemies you Curse take 5% increased Damage',
      '5% chance to Dodge Attack Hits from Cursed Enemies',
    ],
  },
  {
    name: 'Whispers of Death',
    image: 'assets/CurseEffectNotable.png',
    stats: [
      '5% increased Effect of your Curses',
      "20% increased Damage if you've Killed a Cursed Enemy Recently",
    ],
  },
  {
    name: 'Forbidden Words',
    image: 'assets/CurseEffectNotable.png',
    stats: [
      '25% increased Area of Effect of Curse Skills',
      '5% increased Effect of your Curses',
      'Curse Skills have 5% reduced Mana Reservation',
    ],
  },
  {
    name: 'Dark Discourse',
    image: 'assets/CurseEffectNotable.png',
    stats: [
      '10% increased Effect of your Curses',
      'Enemies you Curse are Hindered, with 15% reduced Movement Speed',
      'Regenerate 1% of Energy Shield per second if you’ve Killed an Enemy Recently',
    ],
  },
  {
    name: 'Victim Maker',
    image: 'assets/CurseEffectNotable.png',
    stats: [
      'Curse Skills have 50% increased Skill Effect Duration',
      '25% increased Damage with Hits and Ailments against Cursed Enemies',
    ],
  },
  {
    name: 'Master of Fear',
    image: 'assets/CurseEffectNotable.png',
    stats: [
      'Enemies you Curse are Intimidated',
      'Enemies you Curse are Unnerved',
    ],
  },
  {
    name: 'Wish for Death',
    image: 'assets/CurseEffectNotable.png',
    stats: [
      'You have Culling Strike against Cursed Enemies',
      'Curse Skills have 20% increased Skill Effect Duration',
    ],
  },
  {
    name: 'Heraldry',
    image: 'assets/DmgHeraldSkillsNotable.png',
    stats: [
      '20% increased Effect of Herald Buffs on you',
      '10% reduced Mana Reservation of Herald Skills',
    ],
  },
  {
    name: 'Endbringer',
    image: 'assets/DmgHeraldSkillsNotable.png',
    stats: ['25% increased Damage for each Herald affecting you'],
  },
  {
    name: 'Cult-Leader',
    image: 'assets/DmgHeraldSkillsNotable.png',
    stats: [
      'Minions deal 35% increased Damage while you are affected by a Herald',
    ],
  },
  {
    name: 'Empowered Envoy',
    image: 'assets/DmgHeraldSkillsNotable.png',
    stats: [
      'Herald Skills deal 40% increased Damage',
      '20% increased Effect of Herald Buffs on you',
    ],
  },
  {
    name: 'Dark Messenger',
    image: 'assets/DmgHeraldSkillsNotable.png',
    stats: [
      'Herald Skills have 25% increased Area of Effect',
      'Herald Skills deal 20% increased Damage',
    ],
  },
  {
    name: 'Agent of Destruction',
    image: 'assets/DmgHeraldSkillsNotable.png',
    stats: [
      '10% chance to Freeze, Shock and Ignite while affected by a Herald',
      '25% increased Elemental Damage while affected by a Herald',
    ],
  },
  {
    name: 'Lasting Impression',
    image: 'assets/DmgHeraldSkillsNotable.png',
    stats: [
      '30% increased Damage over Time while affected by a Herald',
      'Herald Skills deal 50% increased Damage over Time',
    ],
  },
  {
    name: 'Self-Fulfilling Prophecy',
    image: 'assets/DmgHeraldSkillsNotable.png',
    stats: [
      '+1% to Critical Strike Chance of Herald Skills',
      '+25% to Critical Strike Multiplier if you dealt a Critical Strike with a Herald Skill Recently',
    ],
  },
  {
    name: 'Invigorating Portents',
    image: 'assets/MinionDmgHeraldSkillsNotable.png',
    stats: [
      'Minions deal 20% increased Damage while you are affected by a Herald',
      'Minions have 10% increased Movement Speed for each Herald affecting you',
    ],
  },
  {
    name: 'Pure Agony',
    image: 'assets/MinionDmgHeraldSkillsNotable.png',
    stats: [
      '+1 to maximum number of Sentinels of Purity',
      '+5 to Maximum Virulence',
      'Minions deal 20% increased Damage while you are affected by a Herald',
    ],
  },
  {
    name: 'Disciples',
    image: 'assets/MinionDmgHeraldSkillsNotable.png',
    stats: [
      '1% additional Physical Damage Reduction per Summoned Sentinel of Purity',
      'You lose Virulence 30% slower',
      'Minions deal 20% increased Damage while you are affected by a Herald',
    ],
  },
  {
    name: 'Dread March',
    image: 'assets/IncreaseMinionLifeNotable.png',
    stats: [
      'Minions have 10% increased maximum Life',
      'Minions have 10% increased Movement Speed',
      'Minions have 10% additional Physical Damage Reduction',
      'Minions have +10% to Chaos Resistance',
    ],
  },
  {
    name: 'Blessed Rebirth',
    image: 'assets/IncreaseMinionLifeNotable.png',
    stats: [
      'Minions have 20% increased maximum Life',
      'Minions created Recently cannot be Damaged',
    ],
  },
  {
    name: 'Life from Death',
    image: 'assets/IncreaseMinionLifeNotable.png',
    stats: [
      'Minions have 15% increased maximum Life',
      'Regenerate 2% of Life per second if a Minion has Died Recently',
      'Minions Recover 4% of Life on Minion Death',
    ],
  },
  {
    name: 'Feasting Fiends',
    image: 'assets/IncreaseMinionLifeNotable.png',
    stats: [
      'Minions have 10% increased maximum Life',
      'Minions deal 10% increased Damage',
      'Minions Leech 0.4% of Damage as Life',
    ],
  },
  {
    name: 'Bodyguards',
    image: 'assets/IncreaseMinionLifeNotable.png',
    stats: [
      'Minions have 10% increased maximum Life',
      'Minions have 10% chance to Knock Enemies Back on Hit with Attacks',
    ],
  },
  {
    name: 'Follow-Through',
    image: 'assets/ProjectileDmgNotable.png',
    stats: ['Projectiles deal 15% increased Damage for each remaining Chain'],
  },
  {
    name: 'Streamlined',
    image: 'assets/ProjectileDmgNotable.png',
    stats: [
      '30% increased Projectile Speed',
      '20% increased Projectile Damage',
    ],
  },
  {
    name: 'Shrieking Bolts',
    image: 'assets/ProjectileDmgNotable.png',
    stats: [
      '35% increased Projectile Damage',
      '10% chance to Taunt Enemies on Projectile Hit',
    ],
  },
  {
    name: 'Eye to Eye',
    image: 'assets/ProjectileDmgNotable.png',
    stats: [
      '25% increased Projectile Damage',
      '35% increased Projectile Damage with Hits against Nearby Enemies',
    ],
  },
  {
    name: 'Repeater',
    image: 'assets/ProjectileDmgNotable.png',
    stats: [
      '30% increased Projectile Damage',
      '8% increased Attack and Cast Speed',
    ],
  },
  {
    name: 'Aerodynamics',
    image: 'assets/ProjectileDmgNotable.png',
    stats: [
      'Projectiles Pierce an additional Target',
      '20% increased Projectile Speed',
      '10% increased Projectile Damage',
    ],
  },
  {
    name: 'Chip Away',
    image: 'assets/BrandDmgNotable.png',
    stats: [
      "25% increased Brand Activation Frequency if you haven't used a Brand Skill Recently",
      '20% increased Brand Attachment range',
    ],
  },
  {
    name: 'Seeker Runes',
    image: 'assets/BrandDmgNotable.png',
    stats: [
      '25% increased Damage with Brand Skills',
      'Unattached Brands gain 20% increased Brand Attachment Range per second',
    ],
  },
  {
    name: 'Remarkable',
    image: 'assets/BrandDmgNotable.png',
    stats: [
      'You can Cast an additional Brand',
      '12% increased Cast Speed with Brand Skills',
    ],
  },
  {
    name: 'Brand Loyalty',
    image: 'assets/BrandDmgNotable.png',
    stats: [
      'Enemies take 5% increased Damage for each of your Brands Attached to them',
      '20% increased Brand Attachment range',
    ],
  },
  {
    name: 'Holy Conquest',
    image: 'assets/BrandDmgNotable.png',
    stats: [
      '5% increased Movement Speed',
      '20% increased Damage with Brand Skills',
      '10% increased Brand Activation frequency',
    ],
  },
  {
    name: 'Grand Design',
    image: 'assets/BrandDmgNotable.png',
    stats: [
      'You can Cast an additional Brand',
      'Brand Skills have 20% increased Duration',
      '10% increased Brand Activation frequency',
      '20% increased Brand Attachment range',
    ],
  },
  {
    name: 'Set and Forget',
    image: 'assets/TrapAndMineDmgNotable.png',
    stats: [
      '25% increased Trap Damage',
      '12% increased Area of Effect',
      '25% reduced Trap Duration',
      '40% increased Trap Trigger Area of Effect',
    ],
  },
  {
    name: 'Expert Sabotage',
    image: 'assets/TrapAndMineDmgNotable.png',
    stats: [
      '30% increased Mine Damage',
      'Can have up to 2 additional Remote Mines placed at a time',
      'Mines have 20% increased Detonation Speed',
    ],
  },
  {
    name: 'Guerilla Tactics',
    image: 'assets/TrapAndMineDmgNotable.png',
    stats: [
      '20% increased Trap Damage',
      '20% increased Mine Damage',
      '10% increased Trap Throwing Speed',
      '10% increased Mine Throwing Speed',
      "5% increased Movement Speed if you've thrown a Trap or Mine Recently",
    ],
  },
  {
    name: 'Expendability',
    image: 'assets/TrapAndMineDmgNotable.png',
    stats: ['10% chance to throw up to 1 additional Trap or Mine'],
  },
  {
    name: 'Arcane Pyrotechnics',
    image: 'assets/TrapAndMineDmgNotable.png',
    stats: [
      '20% increased Trap Damage',
      '20% increased Mine Damage',
      'Gain Arcane Surge when your Mine is Detonated targeting an Enemy',
      'Gain Arcane Surge when your Trap is Triggered by an Enemy',
    ],
  },
  {
    name: 'Surprise Sabotage',
    image: 'assets/TrapAndMineDmgNotable.png',
    stats: [
      '+15% to Critical Strike Multiplier with Traps',
      '+15% to Critical Strike Multiplier with Mines',
      'Trap Damage Penetrates 5% Elemental Resistances',
      'Mine Damage Penetrates 5% Elemental Resistances',
    ],
  },
  {
    name: 'Careful Handling',
    image: 'assets/TrapAndMineDmgNotable.png',
    stats: [
      '15% increased Trap Damage',
      '15% increased Mine Damage',
      '4% increased maximum Life',
      '6% increased maximum Mana',
    ],
  },
  {
    name: 'Peak Vigour',
    image: 'assets/IncreasedMaximumLifeNotable.png',
    stats: [
      '8% increased maximum Life',
      '30% increased Life Recovery from Flasks',
    ],
  },
  {
    name: 'Fettle',
    image: 'assets/IncreasedMaximumLifeNotable.png',
    stats: ['+20 to maximum Life', '10% increased maximum Life'],
  },
  {
    name: 'Feast of Flesh',
    image: 'assets/IncreasedMaximumLifeNotable.png',
    stats: [
      '8% increased maximum Life',
      '0.4% of Attack Damage Leeched as Life',
      '+10 Life gained for each Enemy hit by your Attacks',
    ],
  },
  {
    name: 'Sublime Sensation',
    image: 'assets/IncreasedMaximumLifeNotable.png',
    stats: ['10% increased maximum Energy Shield', '8% increased maximum Life'],
  },
  {
    name: 'Surging Vitality',
    image: 'assets/IncreasedMaximumLifeNotable.png',
    stats: [
      '8% increased maximum Life',
      'Regenerate 0.5% of Life per second',
      'Every 5 seconds, Regenerate 10% of Life over one second',
    ],
  },
  {
    name: 'Peace Amidst Chaos',
    image: 'assets/IncreasedMaximumLifeNotable.png',
    stats: [
      '8% increased maximum Life',
      '2% additional Physical Damage Reduction while stationary',
      'Regenerate 2% of Life per second while stationary',
    ],
  },
  {
    name: 'Adrenaline',
    image: 'assets/IncreasedMaximumLifeNotable.png',
    stats: [
      '6% increased maximum Life',
      '15% increased Maximum total Recovery per second from Life Leech',
      '6% increased Attack Speed while Leeching',
    ],
  },
  {
    name: 'Wall of Muscle',
    image: 'assets/IncreasedMaximumLifeNotable.png',
    stats: ['6% increased maximum Life', '5% increased Strength'],
  },
  {
    name: 'Mindfulness',
    image: 'assets/MaxManaNotable.png',
    stats: [
      '15% increased maximum Mana',
      '80% increased Mana Regeneration Rate while stationary',
    ],
  },
  {
    name: 'Liquid Inspiration',
    image: 'assets/MaxManaNotable.png',
    stats: [
      '15% increased maximum Mana',
      '30% increased Mana Recovery from Flasks',
      '5% increased Mana Recovery Rate during Effect of any Mana Flask',
    ],
  },
  {
    name: 'Openness',
    image: 'assets/MaxManaNotable.png',
    stats: ['+30 to maximum Mana', '20% increased maximum Mana'],
  },
  {
    name: 'Daring Ideas',
    image: 'assets/MaxManaNotable.png',
    stats: [
      '18% increased maximum Mana',
      '0.4% of Attack Damage Leeched as Mana',
    ],
  },
  {
    name: 'Clarity of Purpose',
    image: 'assets/MaxManaNotable.png',
    stats: [
      '15% increased maximum Mana',
      '30% increased Mana Regeneration Rate',
    ],
  },
  {
    name: 'Scintillating Idea',
    image: 'assets/MaxManaNotable.png',
    stats: [
      '20% increased maximum Mana',
      'Damage Penetrates 5% Lightning Resistance',
    ],
  },
  {
    name: 'Holistic Health',
    image: 'assets/IncreasedMaximumLifeNotable.png',
    stats: ['8% increased maximum Life', '10% increased maximum Mana'],
  },
  {
    name: 'Genius',
    image: 'assets/MaxManaNotable.png',
    stats: ['8% increased maximum Mana', '5% increased Intelligence'],
  },
  {
    name: 'Improvisor',
    image: 'assets/MaxManaNotable.png',
    stats: [
      '6% increased Attack Speed',
      '10% increased maximum Mana',
      '+3 Mana gained for each Enemy hit by your Attacks',
    ],
  },
  {
    name: 'Stubborn Student',
    image: 'assets/MaxManaNotable.png',
    stats: [
      '20% increased Armour',
      '15% increased maximum Mana',
      '4% additional Physical Damage Reduction',
    ],
  },
  {
    name: 'Savour the Moment',
    image: 'assets/EnergyShieldNotable.png',
    stats: [
      '10% increased maximum Energy Shield',
      'Regenerate 3.00% of Energy Shield per second while stationary',
    ],
  },
  {
    name: 'Energy From Naught',
    image: 'assets/EnergyShieldNotable.png',
    stats: ['+100 to maximum Energy Shield'],
  },
  {
    name: 'Will Shaper',
    image: 'assets/EnergyShieldNotable.png',
    stats: ['Gain 5% of Maximum Mana as Extra Maximum Energy Shield'],
  },
  {
    name: 'Spring Back',
    image: 'assets/EnergyShieldNotable.png',
    stats: [
      '6% increased maximum Energy Shield',
      '10% faster start of Energy Shield Recharge',
      '15% increased Energy Shield Recharge Rate',
    ],
  },
  {
    name: 'Conservation of Energy',
    image: 'assets/EnergyShieldNotable.png',
    stats: [
      '8% increased maximum Energy Shield',
      '0.3% of Spell Damage Leeched as Energy Shield',
      '20% increased Maximum total Recovery per second from Energy Shield Leech',
    ],
  },
  {
    name: 'Heart of Iron',
    image: 'assets/ArmourNotable.png',
    stats: ['Gain 10% of Maximum Life as Extra Armour'],
  },
  {
    name: 'Prismatic Carapace',
    image: 'assets/ArmourNotable.png',
    stats: ['30% increased Armour', '+1% to all maximum Elemental Resistances'],
  },
  {
    name: 'Militarism',
    image: 'assets/ArmourNotable.png',
    stats: ['30% increased Armour', '8% increased maximum Life'],
  },
  {
    name: 'Second Skin',
    image: 'assets/ArmourNotable.png',
    stats: [
      '3% Chance to Block Spell Damage',
      '30% increased Armour',
      '+3% Chance to Block Attack Damage',
    ],
  },
  {
    name: 'Dragon Hunter',
    image: 'assets/ArmourNotable.png',
    stats: [
      '30% increased Armour',
      '+20% to Fire Resistance',
      '5% additional Physical Damage Reduction',
    ],
  },
  {
    name: 'Enduring Composure',
    image: 'assets/ArmourNotable.png',
    stats: [
      '30% increased Armour',
      "Gain an Endurance Charge every second if you've been Hit Recently",
    ],
  },
  {
    name: 'Prismatic Dance',
    image: 'assets/EvasionNotable.png',
    stats: [
      '30% increased Evasion Rating',
      '+1% to all maximum Elemental Resistances',
    ],
  },
  {
    name: 'Natural Vigour',
    image: 'assets/EvasionNotable.png',
    stats: ['30% increased Evasion Rating', '8% increased maximum Life'],
  },
  {
    name: 'Untouchable',
    image: 'assets/EvasionNotable.png',
    stats: [
      '30% increased Evasion Rating',
      '3% chance to Dodge Attack Hits',
      '3% chance to Dodge Spell Hits',
    ],
  },
  {
    name: 'Shifting Shadow',
    image: 'assets/EvasionNotable.png',
    stats: [
      '20% increased Evasion Rating',
      '+20 to Dexterity',
      '10% chance to Blind Enemies on Hit',
    ],
  },
  {
    name: 'Readiness',
    image: 'assets/EvasionNotable.png',
    stats: ["+4% chance to Evade Attack Hits if you haven't been Hit Recently"],
  },
  {
    name: 'Confident Combatant',
    image: 'assets/BlockAttackDmgNotable.png',
    stats: ['1% increased Damage per 1% Chance to Block Attack Damage'],
  },
  {
    name: 'Flexible Sentry',
    image: 'assets/BlockSpellDmgNotable.png',
    stats: [
      '3% Chance to Block Spell Damage',
      '25% chance to Avoid Elemental Ailments',
      '+3% Chance to Block Attack Damage',
    ],
  },
  {
    name: 'Vicious Guard',
    image: 'assets/BlockAttackDmgNotable.png',
    stats: [
      '0.4% of Attack Damage Leeched as Life',
      'Regenerate 1.5% of Life per second',
      '+4% Chance to Block Attack Damage',
    ],
  },
  {
    name: 'Mystical Ward',
    image: 'assets/BlockSpellDmgNotable.png',
    stats: [
      '4% Chance to Block Spell Damage',
      '0.3% of Spell Damage Leeched as Energy Shield',
      'Regenerate 1.5% of Energy Shield per second',
    ],
  },
  {
    name: 'Rote Reinforcement',
    image: 'assets/BlockAttackDmgNotable.png',
    stats: [
      '+20 to maximum Life',
      '20% chance to gain an Endurance Charge when you Block',
      '+4% Chance to Block Attack Damage',
    ],
  },
  {
    name: 'Mage Hunter',
    image: 'assets/BlockSpellDmgNotable.png',
    stats: [
      '4% Chance to Block Spell Damage',
      '20% increased Spell Damage',
      '20% chance to gain a Power Charge when you Block',
    ],
  },
  {
    name: 'Riot Queller',
    image: 'assets/BlockAttackDmgNotable.png',
    stats: [
      '+4% Chance to Block Attack Damage',
      'Enemies Taunted by you take 6% increased Damage',
    ],
  },
  {
    name: 'One with the Shield',
    image: 'assets/BlockAttackDmgNotable.png',
    stats: [
      'Recover 50 Life when you Block',
      '50% increased Defences from Equipped Shield',
      '+5% Chance to Block Attack Damage while holding a Shield',
    ],
  },
  {
    name: 'Aerialist',
    image: 'assets/DodgeAtksNotable.png',
    stats: [
      '3% chance to Dodge Attack Hits',
      '3% chance to Dodge Spell Hits',
      '5% increased Dexterity',
    ],
  },
  {
    name: 'Elegant Form',
    image: 'assets/DodgeAtksNotable.png',
    stats: [
      '30% chance to Avoid Elemental Ailments',
      '3% chance to Dodge Attack Hits',
      '3% chance to Dodge Spell Hits',
    ],
  },
  {
    name: 'Darting Movements',
    image: 'assets/DodgeAtksNotable.png',
    stats: [
      '5% increased Movement Speed',
      '5% chance to Dodge Attack and Spell Hits while moving',
    ],
  },
  {
    name: 'No Witnesses',
    image: 'assets/DodgeAtksNotable.png',
    stats: [
      '10% chance to gain Elusive on Kill',
      '25% increased Elusive Effect',
    ],
  },
  {
    name: "Molten One's Mark",
    image: 'assets/FireResistNotable.png',
    stats: [
      '+2% to maximum Fire Resistance',
      'Regenerate 1% of Life per second',
    ],
  },
  {
    name: 'Fire Attunement',
    image: 'assets/FireResistNotable.png',
    stats: [
      '40% reduced Ignite Duration on you',
      '50% reduced Extra Damage taken from Critical Strikes while Ignited',
    ],
  },
  {
    name: 'Pure Might',
    image: 'assets/FireResistNotable.png',
    stats: [
      '40% increased Stun and Block Recovery',
      'Purity of Fire has 30% reduced Mana Reservation',
      '+20 to Strength',
    ],
  },
  {
    name: 'Blacksmith',
    image: 'assets/FireResistNotable.png',
    stats: [
      '25% increased Armour',
      '+20% to Fire Resistance',
      '0.4% of Fire Damage Leeched as Life',
    ],
  },
  {
    name: 'Non-Flammable',
    image: 'assets/FireResistNotable.png',
    stats: [
      '+20% to Fire Resistance',
      '40% chance to Avoid being Ignited',
      '6% chance to Avoid Fire Damage from Hits',
    ],
  },
  {
    name: 'Winter Prowler',
    image: 'assets/ColdResistNotable.png',
    stats: ['+2% to maximum Cold Resistance', '6% increased Movement Speed'],
  },
  {
    name: 'Hibernator',
    image: 'assets/ColdResistNotable.png',
    stats: [
      '40% reduced Freeze Duration on you',
      '15% additional Physical Damage Reduction while Frozen',
    ],
  },
  {
    name: 'Pure Guile',
    image: 'assets/ColdResistNotable.png',
    stats: [
      'Purity of Ice has 30% reduced Mana Reservation',
      '+20 to Dexterity',
      '5% chance to Blind Enemies on Hit',
    ],
  },
  {
    name: 'Alchemist',
    image: 'assets/ColdResistNotable.png',
    stats: [
      '+20% to Cold Resistance',
      '8% increased Attack and Cast Speed',
      '20% increased Life Recovery from Flasks',
    ],
  },
  {
    name: 'Antifreeze',
    image: 'assets/ColdResistNotable.png',
    stats: [
      '+20% to Cold Resistance',
      '40% chance to Avoid being Frozen',
      '6% chance to Avoid Cold Damage from Hits',
    ],
  },
  {
    name: 'Wizardry',
    image: 'assets/LightningResistNotable.png',
    stats: ['8% increased maximum Mana', '+2% to maximum Lightning Resistance'],
  },
  {
    name: 'Capacitor',
    image: 'assets/LightningResistNotable.png',
    stats: [
      '12% increased Movement Speed while Shocked',
      '40% reduced Effect of Shock on you',
    ],
  },
  {
    name: 'Pure Aptitude',
    image: 'assets/LightningResistNotable.png',
    stats: [
      'Regenerate 1% of Energy Shield per second',
      'Purity of Lightning has 30% reduced Mana Reservation',
      '+20 to Intelligence',
    ],
  },
  {
    name: 'Sage',
    image: 'assets/LightningResistNotable.png',
    stats: [
      '20% increased Mana Regeneration Rate',
      '+20% to Lightning Resistance',
      'Regenerate 1.5% of Life per second',
    ],
  },
  {
    name: 'Insulated',
    image: 'assets/LightningResistNotable.png',
    stats: [
      '+20% to Lightning Resistance',
      '40% chance to Avoid being Shocked',
      '6% chance to Avoid Lightning Damage from Hits',
    ],
  },
  {
    name: 'Born of Chaos',
    image: 'assets/ChaosResistNotable.png',
    stats: ['+3% to maximum Chaos Resistance'],
  },
  {
    name: 'Antivenom',
    image: 'assets/ChaosResistNotable.png',
    stats: ['+17% to Chaos Resistance', 'Unaffected by Poison'],
  },
  {
    name: 'Rot-Resistant',
    image: 'assets/ChaosResistNotable.png',
    stats: [
      '+13% to Chaos Resistance',
      'Regenerate 1.2% of Life per second',
      'Regenerate 0.6% of Energy Shield per second',
      'Regenerate 0.3% of Mana per second',
    ],
  },
  {
    name: 'Blessed',
    image: 'assets/ChaosResistNotable.png',
    stats: [
      '6% increased maximum Life',
      '10% increased maximum Mana',
      '+13% to Chaos Resistance',
    ],
  },
  {
    name: 'Student of Decay',
    image: 'assets/ChaosResistNotable.png',
    stats: ['25% increased Damage over Time', '+13% to Chaos Resistance'],
  },
]

const sortedNotables = [...notables].sort((a, b) =>
  a.name < b.name ? -1 : a.name > b.name ? 1 : 0
)

/**
 * @param {Object} data
 * @param {boolean} data.alphaSort
 * @param {string} data.query
 * @param {number} data.searchLocation
 */
function getNotablesList(data = {}) {
  const { alphaSort = false, query = '', searchLocation = 0 } = data

  let list = alphaSort ? sortedNotables : notables

  if (query.trim().length >= 3) {
    try {
      var re = new RegExp(query.trim(), 'i')
    } catch (err) {
      re = /./
    }

    list = list.filter(item => {
      if (searchLocation > 0 && re.test(item.name)) {
        return true
      }
      if (searchLocation !== 1) {
        for (var stat of item.stats) {
          if (re.test(stat)) {
            return true
          }
        }
      }
      return false
    })
  }

  return list
}

export default notables

export { getNotablesList, sortedNotables }
