- name: npm-audit
  # You may pin to the exact commit or the version.
  # uses: luisfontes19/npm-audit-action@447e4d42dd060e6138eccbe55dc43b67f6424100
  uses: luisfontes19/npm-audit-action@v0.1.0
  with:
    # Github Token to create the pull requests
    github-token: # default is 
    # [NPM PARAM] Specify if only wants to fix 'dev' or 'prod' issues. If not specify will use all
    only: # optional, default is 
    # [NPM PARAM] Audit level. Allowed values are: low|moderate|high|critical.
    level: # optional, default is 
    # [NPM PARAM] Use this parameter if you want to automate a fix for the found issues
    fix: # optional
    # [NPM PARAM] 
    package-lock-only: # optional
    # [NPM PARAM] Force the fixes even if they can create issues
    force: # optional
    # [NPM PARAM] JSON output
    json: # optional
    # Git user config to commit the changes of a fix
    git-user: # optional, default is action-npm-audit
    # Git email config to commit the changes of a fix
    git-email: # optional, default is action-npm-audit
    # Git commit message
    git-message: # optional, default is npm fix run from npm-audit action
    # Git Pull Request Title
    git-pr-title: # optional, default is [SECURITY] NPM audit fix
    # Git branch to where commit the fixes
    git-branch: # optional, default is npm-audit-action
    # Git remote name to where create the PR
    git-remote: # optional, default is origin
    # The path to the npm project
    project-path: # optional, default is .
          