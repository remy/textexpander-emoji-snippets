const data = require('./emoji.json');

const dict = ({ alias, emoji }) => `<dict>
<key>abbreviation</key>
<string>:${alias}:</string>
<key>abbreviationMode</key>
<integer>1</integer>
<key>creationDate</key>
<date>2012-12-26T21:17:36Z</date>
<key>flags</key>
<integer>0</integer>
<key>label</key>
<string></string>
<key>modificationDate</key>
<date>2012-12-26T21:17:36Z</date>
<key>plainText</key>
<string>${emoji}</string>
<key>snippetType</key>
<integer>0</integer>
<key>useCount</key>
<integer>0</integer>
<key>uuidString</key>
<string>4151D55E-2052-435F-B30F-6C998664B8FD</string>
</dict>`;

const res = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
<key>groupInfo</key>
<dict>
<key>expandAfterMode</key>
<integer>2</integer>
<key>groupName</key>
<string>Emoji</string>
</dict>
<key>snippetsTE2</key>
<array>
${data.filter(({emoji}) => !!emoji).map(({ aliases, emoji }) => dict({ emoji, alias: aliases[0] })).join('\n') }
</array>
</dict>
</plist>`;



console.log(res);
