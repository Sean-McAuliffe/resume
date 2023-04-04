import parseFrontMatter from 'front-matter';
import fs from 'fs/promises';
import { marked } from 'marked';
import path from 'path';
import invariant from 'tiny-invariant';

export interface AwardsMarkdownAttributes {
  title: string;
  date: string;
}

export interface CMSAwards {
  attributes: AwardsMarkdownAttributes;
  html: string;
  slug: string;
}

const basePath = process.cwd();
const AwardsPath = path.join(basePath, 'edit-me', 'cms', 'awards');

export const getAwards = async (): Promise<CMSAwards[]> => {
  const dir = await fs.readdir(AwardsPath);

  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(AwardsPath, filename));
      const { attributes, body } = parseFrontMatter<AwardsMarkdownAttributes>(
        file.toString(),
      );

      invariant(attributes?.title, `${filename} missing "title" attribute.`);

      const html = marked(body);

      return {
        attributes,
        html,
        slug: filename.replace(/\.md$/, ''),
      };
    }),
  );
};