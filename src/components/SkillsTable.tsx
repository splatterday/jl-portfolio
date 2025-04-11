export function SkillsTable() {
    return (
      <section className="w-full sm:max-w-2xl md:max-w-3xl mx-auto pt-10 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm text-muted-foreground font-mono">
          <div>
            <h3 className="text-sm font-semibold mb-2 text-foreground">Languages</h3>
            <ul className="space-y-1 text-xs">
              <li>TypeScript</li>
              <li>JavaScript (ES6)</li>
              <li>HTML5</li>
              <li>CSS/SCSS</li>
              <li>SQL</li>
              <li>PHP</li>
              <li>Handlebars</li>
              <li>XML / Epub</li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-sm font-semibold mb-2 text-foreground">Frameworks & Libraries</h3>
            <ul className="space-y-1 text-xs">
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind</li>
              <li>Aurelia / Angular</li>
              <li>WordPress</li>
              <li>OSCommerce</li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-sm font-semibold mb-2 text-foreground">Tools</h3>
            <ul className="space-y-1 text-xs">
              <li>Git / GitHub</li>
              <li>GitHub Actions</li>
              <li>Jest / Cypress</li>
              <li>Jenkins / Docker</li>
              <li>Postman / GraphQL</li>
              <li>MongoDB / AWS S3</li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-sm font-semibold mb-2 text-foreground">Design & Accessibility</h3>
            <ul className="space-y-1 text-xs">
              <li>Figma / Zeplin</li>
              <li>Photoshop / Illustrator / InDesign</li>
              <li>WCAG Compliance</li>
              <li>User Research</li>
              <li>User Testing</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
  