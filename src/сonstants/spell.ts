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
    noSpell?: string
}

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

export const SPELL_NAME: ISpellType = {
    coldSnap: 'Cold Snap',
    ghostWalk: 'Ghost Walk',
    iceWall: 'Ice Wall',
    emp: 'EMP',
    tornado: 'Tornado',
    alacrity: 'Alacrity',
    sunStrike: 'Sun Strike',
    forgeSpirit: 'Forge Spirit',
    chaosMeteor: 'Chaos Meteor',
    deafeningBlast: 'Deafening Blast',
}