import parseFrontMatter from 'front-matter';
import fs from 'fs/promises';
import { marked } from 'marked';
import path from 'path';
import invariant from 'tiny-invariant';

export interface ProjectsMarkdownAttributes {
  title: string;
  language: string;
  category: string;
  status: string;
}

export interface CMSProjects {
  attributes: ProjectsMarkdownAttributes;
  html: string;
  slug: string;
}

const basePath = process.cwd();
const ProjectsPath = path.join(basePath, 'edit-me', 'cms', 'projects');

export const getProjects = async (): Promise<CMSProjects[]> => {
  const dir = await fs.readdir(ProjectsPath);

  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(ProjectsPath, filename));
      const { attributes, body } = parseFrontMatter<ProjectsMarkdownAttributes>(
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
