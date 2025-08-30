export interface ISpellType{
    coldSnap: string,
    ghostWalk: string,
    iceWall: string,
    emp: string,
    tornado: string,
    alacrity: string,
    sunStrike: string,
    forgeSpirit: string,
    chaosMeteor: string,
    deafeningBlast: string,
    noSpell: string
}

/*const SPELLS = {
    coldSnap: 'coldSnap',
    ghostWalk: 'ghostWalk',
    iceWall: 'iceWall',
    emp: 'emp',
    tornado: 'tornado',
    alacrity: 'alacrity',
    sunStrike: 'sunStrike',
    chaosMeteor: 'chaosMeteor',
    deafeningBlast: 'deafeningBlast',
    noSpell: 'noSpell'
} as const;*/

export type SPELL =
    'coldSnap'|
    'ghostWalk'|
    'iceWall'|
    'emp'|
    'tornado'|
    'alacrity'|
    'sunStrike'|
    'forgeSpirit'|
    'chaosMeteor'|
    'deafeningBlast'|
    'noSpell'
;

// export type SPELLS = typeof SPELLS[keyof typeof SPELLS];/