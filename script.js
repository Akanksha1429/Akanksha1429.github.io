// ===== CONTENT: edit this section to update your portfolio =====
const SITE = {
  name: 'Akanksha Kumari',
  lead: 'Cloud &amp; DevOps engineer with 5+ years building and running cloud-native platforms on Kubernetes. I turn manual, fragile processes into automated pipelines that teams can trust.',
  location: 'Bangalore, Karnataka',
  stack: 'GCP · Kubernetes · Terraform',
  email: 'kumari.akanksha7@gmail.com',
  photo: 'profile.jpg', // square portrait next to index.html
  cv: 'Akanksha_Kumari_CV.pdf', // place this PDF next to index.html
  // Add your URLs here; empty ones are hidden automatically
  links: { LinkedIn: 'https://www.linkedin.com/in/akanksha-kumari-17071b1a1', GitHub: 'https://github.com/Akanksha1429', GitLab: 'https://gitlab.com/Akanksha1429' }
};

const STAGES = [ // newest first
  { id: 's4', when: 'June 2026 – present', place: 'Bengaluru', title: 'I.T Analyst, Grade C2',
    org: 'TCS · Cloud Infrastructure team', tag: 'Current chapter', run: true,
    pipe: ['TCS', '2026 – now', 'Running · Cloud Infrastructure'],
    points: ['Onboarded into the Cloud Infrastructure team and upskilling on the practices and tooling behind ongoing platform and infrastructure work.',
      'Pursuing a Claude AI certification and hands-on experience with Apache Kafka, to go deeper on event-driven and streaming architectures.'] },
  { id: 's3', proj: '0,1,2', when: 'July 2024 – June 2026', place: 'Bengaluru', title: 'Senior Engineer, Software (Platform Developer)',
    org: 'Ielektron Technology · Client: Mercedes-Benz R&amp;D India',
    pipe: ['Ielektron', '2024 – 2026', 'Passed · Client: Mercedes-Benz'],
    points: ['Designed and deployed a scalable cloud-native platform on GKE that fully automated workflows, with a 100% reduction in manual runs.',
      'Built Flyte-based Python workflows using Kubernetes PodSpec customization and Helm charts, cutting execution time by 40%.',
      'Built a production-grade data pipeline moving data from Maglev to GCS, securely integrated with applications to speed up ingestion.',
      'Connected the platform to a user interface through APIs so users see real-time task status.',
      'Tuned Kubernetes resource configuration for better reliability and lower cost.'] },
  { id: 's2', proj: '3,4', when: 'July 2021 – July 2024', place: 'Hyderabad', title: 'Associate, GCP Cloud Engineer',
    org: 'Cognizant Technology Solutions · Client: Google',
    pipe: ['Cognizant', '2021 – 2024', 'Passed · Client: Google'],
    points: ['Designed CI/CD pipelines with Cloud Source Repositories and Cloud Build to automate build, test and deployment.',
      'Built automated deployments to Cloud Run so every successful code integration ships consistently.',
      'Containerized applications with Docker and supported infrastructure provisioning with Terraform.',
      'Set up Cloud Monitoring and Cloud Logging, reducing MTTR and application downtime by 50%.',
      'Worked with engineering and support teams to resolve production issues and improve deployment stability.'] },
  { id: 's1', when: 'July 2017 – July 2021', place: 'Bhilai', title: 'B.Tech, Computer Science Engineering',
    org: 'Rungta College of Engineering and Technology · 84%',
    pipe: ['B.Tech, CSE', '2017 – 2021', 'Passed · 84%'], points: [] }
];

const IMPACT = [
  ['40%', 'faster workflow execution with Flyte and Kubernetes tuning'],
  ['100%', 'of manual runs removed by the GKE platform'],
  ['50%', 'lower MTTR and downtime with monitoring and logging'],
  ['30%', "team productivity gain behind Google's Best Performer Award"]
];
const SKILLS = [
  ['Cloud', 'Google Cloud Platform, AWS'], ['Containers and orchestration', 'Docker, Kubernetes, GKE, Helm'],
  ['Infrastructure as Code', 'Terraform, Pulumi'], ['CI/CD', 'GitLab CI/CD, Cloud Build'],
  ['Workflow orchestration', 'Flyte'], ['Monitoring and observability', 'Cloud Monitoring, Cloud Logging, Grafana'],
  ['Languages', 'Python, Shell'], ['Version control', 'GitHub, GitLab']
];
const CERTS = ['Google Cloud Professional Cloud Architect, January 2023', 'Google Cloud Associate Cloud Engineer, December 2021', 'Claude AI, in progress'];
const AWARDS = ['<b>Mercedes-Benz client appreciation</b> for a fully automated platform that improved user interaction and operational efficiency.',
  '<b>Best Performer Award, Google</b> for faster ticket resolution and a 30% gain in team productivity.'];

// ===== RENDER: builds the page from the content above =====
const L = a => a.map(x => `<li>${x}</li>`).join('');
const ICONS = {
  'Email': '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  'LinkedIn': '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  'GitHub': '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
  'GitLab': '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z"/></svg>',
  'Download CV': '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 20h16"/></svg>'
};
const iconLink = (label, href, extra = '') => `<a class="icon-btn" href="${href}" aria-label="${label}" title="${label}"${extra}>${ICONS[label]}</a>`;
const linkEls = Object.entries(SITE.links).filter(([, u]) => u).map(([n, u]) => [n, u]);
document.getElementById('app').innerHTML = `
<nav class="nav" aria-label="Sections"><div class="wrap navin"><a class="brand" href="#top" aria-label="Back to top">AK</a><div class="links"><a href="#journey">Journey</a><a href="#projects">Projects</a><a href="#toolkit">Toolkit</a><a href="#terminal">Explore</a><a href="#contact">Contact</a><a class="cv" href="${SITE.cv}" download>Download CV</a></div><button id="theme" class="ghost" type="button" aria-label="Toggle light or dark theme" title="Toggle light or dark theme"></button></div></nav>
<header class="hero" id="top"><div class="wrap"><div class="intro"><div class="hero-text">
<h1>${SITE.name}</h1><p class="lead">${SITE.lead}</p>
<div class="meta"><span>${SITE.location}</span><span>${SITE.stack}</span></div>
</div>
<img class="avatar" src="${SITE.photo}" alt="Portrait of ${SITE.name}" width="260" height="260"></div>
<ol class="pipe" aria-label="Career pipeline">${[...STAGES].reverse().map(s => `<li${s.run ? ' class="run"' : ''}><a href="#${s.id}"><b>${s.pipe[0]}</b><span>${s.pipe[1]}</span><i class="st">${s.pipe[2]}</i></a></li>`).join('')}</ol>
</div></header>
<section id="journey"><div class="wrap"><h2>The journey</h2>
${STAGES.map(s => `<article class="stage" id="${s.id}"${s.proj ? ` data-proj="${s.proj}"` : ''}><div class="when"><strong>${s.when}</strong>${s.place}</div><div><h3>${s.title}</h3><p class="org">${s.org}</p>${s.points.length ? `<ul>${L(s.points)}</ul>` : ''}${s.tag ? `<span class="tag">${s.tag}</span>` : ''}</div></article>`).join('')}
</div></section>
<section><div class="wrap"><h2>What the work delivered</h2><div class="impact">${IMPACT.map(([n, t]) => `<div><strong>${n}</strong><span>${t}</span></div>`).join('')}</div></div></section>
<section id="projects"><div class="wrap"><h2>Projects</h2><p class="hint">Pick a project to read about it. Or choose a tool in the toolkit below to see where it was used.</p>
<div class="tabs" role="tablist" id="tabs" aria-label="Projects"></div><div id="panel" class="panel" role="tabpanel" tabindex="0"></div></div></section>
<section id="toolkit"><div class="wrap"><h2>Toolkit</h2><p class="hint">Select a tool to see which projects used it. Select it again to clear.</p><p class="hint" id="note" aria-live="polite"></p>
<dl class="skills">${SKILLS.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl></div></section>
<section id="terminal"><div class="wrap"><h2>Explore my work</h2><p class="hint">Type a command or search by keyword, for example <code>search terraform</code>. Type <code>help</code> to see everything.</p>
<div class="term" id="term"><div class="term-out" id="tout" role="log" aria-live="polite"></div><div class="term-in"><label for="tin" class="ps">visitor@akanksha:~$</label><input id="tin" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Terminal command"></div></div>
</div></section>
<section><div class="wrap two"><div><h3>Certifications</h3><ul>${L(CERTS)}</ul></div><div><h3>Recognition</h3><ul>${L(AWARDS)}</ul></div></div></section>
<footer id="contact"><div class="wrap"><h2>Get in touch</h2><p>I enjoy exchanging ideas on cloud infrastructure, Kubernetes and platform automation. Whether you are hiring, collaborating or simply curious about my work, you can reach me through any of the channels below.</p>
<div class="actions">${iconLink('Email', 'mailto:' + SITE.email)}${linkEls.map(([n, u]) => iconLink(n, u, ' target="_blank" rel="noopener"')).join('')}</div></div></footer>`;

// ===== BEHAVIOUR: projects, filters, toggles, theme =====
(()=>{
const P=[
{n:'GKE workflow platform',t:'Cloud-native workflow platform on GKE',m:'Mercedes-Benz R&D India · Ielektron Technology · 2024 – 2026',a:'A scalable platform on GKE that runs use-case workflows end to end, replacing manual scripts and per-user VMs.',v:'gke',x:[
['Business challenge',['Every task depended on manual runs of multiple bash scripts.','Each user needed a dedicated VM to run the complete application.','Manual execution and resource allocation per user would not scale as usage grew.']],
['Scalability and cost impact',['Provisioning a high-configuration VM for every new user was costly for the organization.','Each release had to be validated through manual testing.']],
['Technology decisions',['Moved the workload to a cloud platform to address scalability and resource utilization.','Selected Flyte for workflow orchestration, as it is compatible with the existing GKE setup.','Reused GitLab CI/CD, already in place, and integrated it with the GCP infrastructure instead of introducing a new tool.']],
['Obstacles and resolution',['The application ran as multiple containers using Docker Compose.','A proof of concept with a teammate to run them together in a single pod needed careful resource configuration and networking.','Adopted Docker-in-Docker for the first release.','Planned upgrade: multiple containers in one pod, with networking established between them.']]
],d:['Designed and deployed the platform on Google Kubernetes Engine and fully automated the workflows.','Built Flyte-based Python workflows with Kubernetes PodSpec customization.','Packaged containerized deployments with Helm charts.','Tuned Kubernetes resource configuration for reliability and cost.'],o:'Teams no longer run multiple bash scripts by hand or wait for a dedicated high-configuration VM per user. Manual runs fell by 100%, execution time dropped by 40%, and the client recognized the platform for improving user interaction and operational efficiency.',s:['GKE','Kubernetes','Helm','Flyte','Python','Docker','GitLab CI/CD','Google Cloud Platform']},
{n:'Maglev to GCS data pipeline',t:'Maglev to GCS data pipeline',m:'Mercedes-Benz R&D India \u00b7 Ielektron Technology \u00b7 2024 \u2013 2026',a:'An automated pipeline, built into the existing Flyte workflow, that copies data from a Maglev bucket to a GCS bucket and reports transfer progress.',v:'maglev',x:[
['Business challenge',['Data transfers from the Maglev bucket to the GCS bucket had to be triggered manually before workflows could run.','Transfer status could only be checked in a separate UI.','Only "initiated" and "completed" were shown, with no intermediate progress, while a transfer could take hours.']],
['User impact at scale',['Users would have had to switch between separate UIs to start a transfer, monitor it and then resume their workflow.','Waiting without any estimate of the remaining time would become frustrating as usage grew.']],
['Technology decisions',['Removed manual intervention and idle waiting by connecting the transfer to the existing Flyte workflow pipeline.','Created a Flyte task that checks whether the data already exists in the GCS bucket.','Triggers the data workflow to copy the data only when it is missing.']],
['Obstacles and resolution',['Running transfers gave no visibility into progress.','Resolved by showing the total data size in GB and reporting the percentage transferred and remaining at regular intervals.']]
],d:['Built the pipeline for automated, repeatable transfers.','Integrated applications with GCS securely.','Streamlined the workflows around data ingestion.'],o:'Users no longer transfer data manually; the pipeline handles it end to end, with progress reporting and an estimated-time feature planned.',s:['Flyte','Python','GCS','GKE','Google Cloud Platform']},
{n:'Real-time status UI',t:'Self-service UI with real-time run status',m:'Mercedes-Benz R&D India \u00b7 Ielektron Technology \u00b7 2024 \u2013 2026',a:'A UI deployed on top of the platform where users enter their details, trigger a recompute and follow every run, with intermediate and final outputs, in one place.',v:'ui',x:[
['Business challenge',['Pipeline execution worked, but users had to check results in the Flyte dashboard.','Pipelines were triggered through GitLab, so each recompute depended on running a pipeline individually.']],
['Self-service at scale',['Removed the need to run the GitLab pipeline individually for every recompute.','Users now enter their details directly in the deployed UI and start the recompute themselves.']],
['Technology decisions',['Integrated a UI that shows every run and its details in a single place.','Consumed APIs to display real-time task status.','Updated the database with the status of workflow execution.','Outputs can be downloaded and visualized from the same interface.']],
['Obstacles and resolution',['The UI initially showed only the end result.','Used GCS as intermediate storage so intermediate data could be kept and surfaced in the output panel.','Configured intermediate buckets for all three environments with Pulumi.']]
],d:['Consumed APIs in the interface to show status in real time.','Updated the database with the status of workflow execution.'],o:'A self-sufficient UI showing all runs, user details, and intermediate and final outputs, with a visualization tool integrated in the pipeline.',s:['Pulumi','Flyte','Python','API requests and responses','SQL','Google Cloud Platform']},
{n:'CI/CD to Cloud Run',t:'CI/CD pipelines and Cloud Run deployments',m:'Google (via Cognizant) \u00b7 2021 \u2013 2024',a:'A proof of concept that automated the build, containerization and deployment of a website on Google Cloud, from source repository to Cloud Run.',v:'cicd',x:[
['Business challenge',['An application needed to be containerized and orchestrated.','A proof of concept for automated pipelines had to be completed first.']],
['Scalability constraints',['The application ran locally, which made it hard to scale with changing requirements and resources.']],
['Technology decisions',['Used Cloud Source Repositories, Cloud Build and Cloud Run to test containerization of a website.','Explored Terraform to create and manage the supporting resources.']],
['Implementation and learnings',['Gained hands-on experience with Cloud Build, Cloud Run and Terraform during the proof of concept.','Built a pipeline that triggers a build, stores the image in Artifact Registry and deploys it to Cloud Run.']]
],d:['Designed pipelines with Cloud Source Repositories and Cloud Build.','Deployed to Cloud Run automatically on every successful code integration.','Containerized applications with Docker.','Supported version-controlled infrastructure provisioning with Terraform.'],o:'Rapid, consistent releases without manual deployment steps.',s:['Cloud Build','Cloud Run','Cloud Source Repositories','Docker','Terraform','Google Cloud Platform']},
{n:'Monitoring and reliability',t:'Monitoring and logging for reliability',m:'Google (via Cognizant) \u00b7 2021 \u2013 2024',a:'Monitoring and logging for production workloads, so issues are detected early and resolved quickly.',v:'mon',x:[
['Business challenge',['Users had multiple workloads deployed, but issues were hard to debug.','Restoring the system after downtime, or after maintenance, took a long time.']],
['Reliability goal',['Observability across production systems so that issues are seen and fixed quickly.']],
['Technology decisions',['Implemented monitoring and logging with Cloud Monitoring and Cloud Logging.','Made debugging easier and gave visibility into how workloads were functioning.']],
['Obstacles and resolution',['Without logging or monitoring, troubleshooting was slow and getting services back to a working state took longer.','Resolved by implementing monitoring and logging tooling.']]
],d:['Implemented monitoring and logging with Cloud Monitoring and Cloud Logging.','Identified and resolved infrastructure and deployment issues affecting production.','Worked with engineering and support teams on reliability and deployment stability.'],o:'MTTR and application downtime reduced by 50%.',s:['Cloud Monitoring','Cloud Logging','Google Cloud Platform']},
{n:'Terraform GCP infrastructure',t:'Production-grade GCP infrastructure with Terraform',m:'Infrastructure as Code project',a:'A modular Terraform codebase that provisions GCP infrastructure across multiple environments and deploys through a GitLab pipeline.',d:['Reusable modules for VPC, subnets, firewall rules, IAM, Cloud Router and Cloud NAT.','Remote Terraform state in Google Cloud Storage.','GitLab CI/CD with validation, planning and deployment stages.','Documented the architecture and deployment workflow.'],o:'Version-controlled, pipeline-driven provisioning that repeats cleanly across environments.',s:['Terraform','GitLab CI/CD','Google Cloud Platform','GCS'],link:{label:'View project on GitLab',url:'https://gitlab.com/Akanksha1429/GCP_terraform/-/tree/main/org_clone?ref_type=heads'}}
];
const VIZ={gke:`
<div class="viz"><h4>Before and after</h4><div class="ba">
<div class="ba-col bad"><h5>Before</h5><ul><li>Manual runs of multiple bash scripts for every task</li><li>A dedicated high-configuration VM for each user</li><li>Resources allocated manually per user</li><li>Every release tested manually</li></ul></div>
<span class="ba-arrow" aria-hidden="true">→</span>
<div class="ba-col good"><h5>After</h5><ul><li>Flyte workflows run the tasks automatically</li><li>Workloads run on GKE, so capacity is not tied to one VM per user</li><li>Resources set through Helm charts and PodSpec customization</li><li>Releases flow through GitLab CI/CD</li><li>Manual runs down 100%, execution time down 40%</li></ul></div></div></div>
<div class="viz"><h4>How it fits together (simplified)</h4>
<div class="flow row"><div class="node">Users<small>UI with live task status</small></div><span class="arr" aria-hidden="true">→</span><div class="node">APIs</div><span class="arr" aria-hidden="true">→</span><div class="node hl">GKE cluster<small>Flyte workflows, pods set up with PodSpec and Helm</small></div><span class="arr" aria-hidden="true">→</span><div class="node">Google Cloud Storage</div></div>
<div class="flow" style="margin-top:10px"><div class="node">GitLab CI/CD</div><span class="arr" aria-hidden="true">→</span><span class="note">releases to GKE</span></div></div>`};
const ba=(b,a)=>`<div class="viz"><h4>Before and after</h4><div class="ba"><div class="ba-col bad"><h5>Before</h5><ul>${b.map(x=>`<li>${x}</li>`).join('')}</ul></div><span class="ba-arrow" aria-hidden="true">\u2192</span><div class="ba-col good"><h5>After</h5><ul>${a.map(x=>`<li>${x}</li>`).join('')}</ul></div></div></div>`;
const fl=(h,n,note)=>`<div class="viz"><h4>${h}</h4><div class="flow row">${n.map(([t,s,hl],i)=>(i?'<span class="arr" aria-hidden="true">\u2192</span>':'')+`<div class="node${hl?' hl':''}">${t}${s?`<small>${s}</small>`:''}</div>`).join('')}</div>${note?`<p class="vnote">${note}</p>`:''}</div>`;
VIZ.maglev=ba(['Data transfer triggered manually','Status checked in a separate UI','Only "initiated" and "completed" shown','No way to know how long a transfer would take'],['A Flyte task checks GCS and triggers the copy only when needed','No manual transfer','Progress shown at intervals: GB and percentage transferred','Estimated time remaining planned, based on data size'])+fl('How the transfer works (simplified)',[['Workflow run'],['Flyte task','checks the data in the GCS bucket'],['Data workflow','copies from the Maglev bucket if data is missing',1],['GCS bucket','data ready for execution']],'Progress is reported at regular intervals as GB transferred and percentage complete.');
VIZ.ui=ba(['Results checked in the Flyte dashboard','Pipelines triggered individually through GitLab','Only the end result was visible'],['Users enter details and recompute directly from the UI','Every run and user detail in one place','Workflow execution status recorded in the database','Intermediate and final outputs shown, with download options','Visualization tool integrated in the pipeline'])+fl('How a recompute flows (simplified)',[['User','enters details in the UI'],['Recompute pipeline','runs the workflow'],['Database','status of each workflow execution updated'],['GCS','intermediate data stored per environment',1],['UI output panel','intermediate and final outputs, with downloads']]);
VIZ.cicd=ba(['Application ran locally','Hard to scale with requirements and resources'],['Containerized with Docker','Every successful code integration deploys to Cloud Run','Version-controlled infrastructure provisioning with Terraform','Rapid, consistent releases without manual deployment steps'])+fl('Pipeline stages (simplified)',[['Cloud Source Repositories','code push'],['Cloud Build','triggers the build',1],['Artifact Registry','stores the image'],['Cloud Run','deploys the container']],'Terraform provisions and manages the supporting resources as version-controlled code.');
VIZ.mon=ba(['No monitoring or logging in place','Issues hard to debug','Long recovery after downtime or maintenance'],['Cloud Monitoring and Cloud Logging in place','Issues identified and resolved faster','Closer work with engineering and support teams on reliability','MTTR and downtime down 50%'])+fl('Observability flow (simplified)',[['Production workloads'],['Cloud Logging and Cloud Monitoring','logs and metrics',1],['Faster debugging and recovery','MTTR down 50%']]);
const $=s=>document.querySelector(s),tabs=$('#tabs'),panel=$('#panel'),root=document.documentElement;
const el=(t,x,c)=>{const e=document.createElement(t);if(x)e.textContent=x;if(c)e.className=c;return e};
function show(i){
[...tabs.children].forEach((b,j)=>{b.setAttribute('aria-selected',j===i);b.tabIndex=j===i?0:-1});
const p=P[i];panel.setAttribute('aria-labelledby','t'+i);panel.replaceChildren(el('h3',p.t),el('p',p.m,'m'),el('p',p.a));
if(p.x){const g=el('div',0,'story');p.x.forEach(([k,v])=>{const c=el('div',0,'sc'),l=el('ul');[].concat(v).forEach(t=>l.append(el('li',t)));c.append(el('h5',k),l);g.append(c)});panel.append(g)}
if(p.v&&VIZ[p.v]){const b=document.createElement('div');b.innerHTML=VIZ[p.v];panel.append(b)}
if(!p.x)panel.append(el('h4','What I did'));
const u=el('ul');p.d.forEach(x=>u.append(el('li',x)));
const r=el('div',0,'stackrow');p.s.forEach(x=>r.append(el('span',x)));
if(!p.x)panel.append(u,el('h4','Outcome'),el('p',p.o,'out'));
panel.append(el('h4','Stack'),r);
if(p.link&&p.link.url){const a=el('a',p.link.label||'View project','btn');a.href=p.link.url;a.target='_blank';a.rel='noopener';const w=el('p');w.append(a);panel.append(w)}
}
P.forEach((p,i)=>{const b=el('button',p.n,'tab');b.setAttribute('role','tab');b.id='t'+i;b.onclick=()=>show(i);
b.onkeydown=e=>{const k={ArrowRight:1,ArrowLeft:-1}[e.key];if(!k)return;const j=(i+k+P.length)%P.length;show(j);tabs.children[j].focus()};tabs.append(b)});
show(0);
let cur=null;
function filter(){
document.querySelectorAll('.chip').forEach(c=>c.setAttribute('aria-pressed',c.textContent===cur));
let n=0;[...tabs.children].forEach((b,i)=>{const h=!!cur&&P[i].s.includes(cur);b.classList.toggle('hit',h);b.classList.toggle('dim',!!cur&&!h);if(h)n++});
$('#note').textContent=cur?(n?cur+' is used in '+n+(n>1?' projects':' project')+' — highlighted under Projects.':'No project above lists '+cur+'.'):'';
}
document.querySelectorAll('.skills dd').forEach(dd=>{const names=dd.textContent.split(',').map(s=>s.trim());const w=el('div',0,'chips');
names.forEach(n=>{const c=el('button',n,'chip');c.type='button';c.setAttribute('aria-pressed','false');c.onclick=()=>{cur=cur===n?null:n;filter()};w.append(c)});dd.replaceChildren(w)});
document.querySelectorAll('.stage').forEach(s=>{
const parts=[...s.querySelectorAll('ul,.tag')];if(!parts.length)return;
const b=el('button','','tog');b.type='button';
const set=o=>{parts.forEach(p=>p.hidden=!o);b.setAttribute('aria-expanded',o);b.textContent=o?'Hide details':'Show details'};
s.querySelector('.org').after(b);b.onclick=()=>set(b.getAttribute('aria-expanded')!=='true');s.set=set;set(s.id==='s3'||s.id==='s4');
});
document.querySelectorAll('.pipe a').forEach(a=>a.addEventListener('click',()=>{const s=$(a.getAttribute('href'));if(s.set)s.set(true);s.classList.remove('flash');void s.offsetWidth;s.classList.add('flash')}));
const tb=$('#theme');
const isDark=()=>root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
const icon=()=>{tb.textContent=isDark()?'\u2600\uFE0E':'\u263E'};icon();
tb.onclick=()=>{root.dataset.theme=isDark()?'light':'dark';icon()};
// ----- Links from each role to its projects -----
document.querySelectorAll('.stage[data-proj]').forEach(s=>{
const w=el('div',0,'plinks');w.append(el('span','Projects from this role:'));
s.dataset.proj.split(',').forEach(i=>{const b=el('button',P[i].n,'chip');b.type='button';
b.onclick=()=>{show(+i);$('#projects').scrollIntoView({block:'start'});panel.focus({preventScroll:true})};w.append(b)});
s.querySelector('.tog').after(w);
});
// ----- Terminal -----
const T=s=>{const d=document.createElement('div');d.innerHTML=s;return d.textContent};
const out=$('#tout'),inp=$('#tin'),hist=[];let hp=0;
const line=(x,c)=>{out.append(el('div',x,'tl'+(c?' '+c:'')));out.scrollTop=out.scrollHeight};
const lines=(a,c)=>a.forEach(x=>line(x,c));
const docs=[],add=(src,text,extra='')=>docs.push({src,text,hay:(src+' '+text+' '+extra).toLowerCase()});
STAGES.forEach(s=>s.points.forEach(p=>add('Experience: '+s.pipe[0],T(p),T(s.org)+' '+s.title)));
P.forEach((p,i)=>{const src='Project '+(i+1)+': '+p.n;[p.t,p.a,...(p.x||[]).flatMap(([k,v])=>[].concat(v).map(t=>k+': '+t)),...p.d,p.o,'Stack: '+p.s.join(', ')].forEach(x=>add(src,x,p.m))});
SKILLS.forEach(([k,v])=>add('Skills: '+k,v));
CERTS.concat(AWARDS).forEach(x=>add('Credentials',T(x)));
IMPACT.forEach(([n,t])=>add('Impact',n+' '+t));
const find=q=>{const w=q.toLowerCase().split(/\s+/).filter(Boolean);return docs.filter(d=>w.every(x=>d.hay.includes(x)))};
const C={
help:()=>lines(['Commands:','  about             who I am','  experience [n]    list my roles, or details of role n','  projects          list my projects','  project <n>       details of project n','  search <words>    search all my work, for example: search terraform','  skills            tools and technologies','  impact            results in numbers','  certs, awards     credentials and recognition','  contact           ways to reach me','  clear             clear the screen']),
about:()=>lines([SITE.name+': '+T(SITE.lead),'Based in '+SITE.location+'. Core stack: '+SITE.stack+'.']),
experience:a=>{if(!a[0]){STAGES.forEach((s,i)=>line('['+(i+1)+'] '+s.title+', '+T(s.org)+' ('+s.when+')'));return line('Run "experience <n>" for details.','dim')}
const s=STAGES[+a[0]-1];if(!s)return line('No role '+a[0]+'. Choose 1 to '+STAGES.length+'.','err');
line(s.title+', '+T(s.org)+' ('+s.when+')');s.points.forEach(p=>line('  - '+T(p)))},
projects:()=>{P.forEach((p,i)=>line('['+(i+1)+'] '+p.t));line('Run "project <n>" for details.','dim')},
project:a=>{const p=P[+a[0]-1];if(!p)return line('Choose a project from 1 to '+P.length+'. Run "projects" to see the list.','err');
lines([p.t,p.m,p.a,...(p.x||[]).flatMap(([k,v])=>[k+':',...[].concat(v).map(t=>'  - '+t)]),'What I did:',...p.d.map(x=>'  - '+x),'Outcome: '+p.o,'Stack: '+p.s.join(', '),...(p.link&&p.link.url?['Link: '+p.link.url]:[])])},
skills:()=>SKILLS.forEach(([k,v])=>line(k+': '+v)),
impact:()=>IMPACT.forEach(([n,t])=>line(n+'  '+t)),
certs:()=>CERTS.forEach(x=>line('- '+x)),
awards:()=>AWARDS.forEach(x=>line('- '+T(x))),
contact:()=>lines(['Email: '+SITE.email,...Object.entries(SITE.links).filter(([,u])=>u).map(([n,u])=>n+': '+u)]),
search:a=>{const q=a.join(' ');if(!q)return line('Usage: search <words>, for example: search kubernetes','err');
const r=find(q);if(!r.length)return line('No results for "'+q+'". Try a tool or topic such as kubernetes, terraform, flyte or monitoring.','err');
line(r.length+' result'+(r.length>1?'s':'')+' for "'+q+'":','dim');r.slice(0,8).forEach(d=>{line(d.src,'src');line('  '+d.text)});
if(r.length>8)line('...and '+(r.length-8)+' more. Add another word to narrow the search.','dim')},
clear:()=>out.replaceChildren()
};
const AL={whoami:'about',exp:'experience',find:'search',grep:'search',cls:'clear'};
const run=raw=>{const t=raw.trim();line('visitor@akanksha:~$ '+t,'cmd');if(!t)return;
const [c0,...a]=t.split(/\s+/);const c=AL[c0.toLowerCase()]||c0.toLowerCase();
(C[c]||(()=>line('command not found: '+c0+'. Type help to see what is available.','err')))(a)};
inp.addEventListener('keydown',e=>{
if(e.key==='Enter'){const v=inp.value;if(v.trim()){hist.push(v);hp=hist.length}run(v);inp.value=''}
else if(e.key==='ArrowUp'){if(hp>0){inp.value=hist[--hp];e.preventDefault()}}
else if(e.key==='ArrowDown'){hp=Math.min(hp+1,hist.length);inp.value=hist[hp]||'';e.preventDefault()}
else if(e.key==='Tab'){const v=inp.value.toLowerCase(),m=Object.keys(C).filter(k=>v&&k.startsWith(v));if(m.length===1){inp.value=m[0]+' ';e.preventDefault()}}
});
$('#term').onclick=()=>{if(!getSelection().toString())inp.focus({preventScroll:true})};
lines(['Welcome. This terminal searches my career: roles, projects, skills and awards.','Type help for commands, or try: search kubernetes'],'dim');
// ----- Sticky navigation: highlight the section in view -----
if('IntersectionObserver' in window){
const navA=[...document.querySelectorAll('.nav .links a')];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)navA.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-40% 0px -55% 0px'});
['journey','projects','toolkit','terminal','contact'].forEach(id=>{const s=document.getElementById(id);if(s)io.observe(s)});
}
})();
