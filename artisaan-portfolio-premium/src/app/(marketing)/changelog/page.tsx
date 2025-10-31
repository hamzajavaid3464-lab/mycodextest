import path from 'path';
import fs from 'fs/promises';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { SectionHeader } from '@/components/layout/section-header';
import { mdxComponents } from '@/components/mdx/mdx-components';

export default async function ChangelogPage() {
  const changelogPath = path.join(process.cwd(), 'src', 'content', 'changelog', 'releases.md');
  const source = await fs.readFile(changelogPath, 'utf-8');
  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return (
    <div className="container max-w-3xl space-y-10 py-24">
      <SectionHeader
        align="left"
        description="A living log of product releases and studio milestones."
        eyebrow="Changelog"
        title="Build notes"
      />
      <div className="prose prose-invert max-w-none text-base">{content}</div>
    </div>
  );
}
