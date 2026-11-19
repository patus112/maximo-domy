import modelsRaw from '../data/models.json';
import optionsRaw from '../data/options.json';

export interface Box {
  length: number;
  width: number;
  height: number;
}

export interface Model {
  id: string;
  name: string;
  expanded_mm: Box;
  folded_mm: Box;
  units_per_40HC: number;
  units_per_40HC_text: string;
  weight_t: number;
  area_m2: number;
  layout_en: string;
  layout_sk_draft: string;
  bedrooms: number;
  bathrooms: number | null;
  images: {
    photo: string | null;
    plan: string | null;
    plan3d: string | null;
    video: string | null;
  };
}

export interface OptionValueObject {
  name?: string;
  mm?: string;
  id?: string;
  m?: string;
  per_40HQ?: number;
}

export interface OptionCategory {
  id: string;
  en: string;
  sk_draft: string;
  values?: Array<string | OptionValueObject>;
  sk_values_draft?: string[];
  images?: string[];
  note?: string;
}

export const models = modelsRaw.models as Model[];
export const stepTitles = modelsRaw.unfolding_steps_sk_draft;

const names: Record<string, string> = {
  '10ft': '10 ft',
  '20ft': '20 ft',
  '30ft': '30 ft',
  '40ft': '40 ft',
  '20ft-narrow': '20 ft úzka',
  '40ft-narrow': '40 ft úzka',
  '30ft-joined': '30 ft spojená',
  '40ft-joined': '40 ft spojená',
};

export function modelName(model: Model): string {
  return names[model.id] ?? model.name;
}

export const options = optionsRaw.categories as OptionCategory[];

export function optionCategory(id: string): OptionCategory | undefined {
  return options.find((category) => category.id === id);
}

export function optionLines(category: OptionCategory | undefined): string[] {
  if (!category) return [];
  if (category.sk_values_draft?.length) return category.sk_values_draft;
  return (category.values ?? []).map((value) => {
    if (typeof value === 'string') return value;
    if (value.name && value.mm) return `${value.name} · ${value.mm.replace(/x/g, ' × ')} mm`;
    if (value.id && value.m) {
      const per = value.per_40HQ === 1 ? '1 kus do 40′ HC' : `${value.per_40HQ ?? '–'} ks do 40′ HC`;
      return `${value.id} · ${value.m.replace(/x/g, ' × ')} m · ${per}`;
    }
    return '';
  }).filter(Boolean);
}
