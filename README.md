# tsconfig-json-syntax-error

## Setup

```sh
git clone git@github.com:SimonSiefke/tsconfig-json-syntax-error.git &&
cd tsconfig-json-syntax-error &&
npm ci &&
node scripts/run.js
```

## Output

The JS/TS language service immediately crashed 5 times. The service will not be restarted.

```
A non-recoverable error occurred while executing tsserver command: updateOpen
Error processing request. Debug Failure. False expression: Non-string value passed to `ts.resolveTypeReferenceDirective`, likely by a wrapping package working with an outdated `resolveTypeReferenceDirectives` signature. This is probably not a problem in TS itself.
Error: Debug Failure. False expression: Non-string value passed to `ts.resolveTypeReferenceDirective`, likely by a wrapping package working with an outdated `resolveTypeReferenceDirectives` signature. This is probably not a problem in TS itself.
    at resolveTypeReferenceDirective (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:40970:9)
    at Object.resolve (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:117449:42)
    at resolveNamesWithLocalCache (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:122873:29)
    at Object.resolveTypeReferenceDirectiveReferences (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:122938:12)
    at ConfiguredProject2.resolveTypeReferenceDirectiveReferences (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:171578:33)
    at resolveTypeReferenceDirectiveNamesWorker (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:118136:20)
    at resolveTypeReferenceDirectiveNamesReusingOldState (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:118306:14)
    at createProgram (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:117923:27)
    at synchronizeHostData (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:135400:15)
    at Object.getProgram (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:135472:5)
    at ConfiguredProject2.updateGraphWorker (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:172153:41)
    at ConfiguredProject2.updateGraph (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:172090:32)
    at ConfiguredProject2.updateGraph (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:173272:24)
    at _ProjectService.createLoadAndUpdateConfiguredProject (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:174879:13)
    at _ProjectService.assignProjectToOpenedScriptInfo (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:175970:26)
    at /workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:176250:64
    at flatMap (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:2555:17)
    at _ProjectService.applyChangesInOpenFiles (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:176250:24)
    at updateOpen (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:177395:29)
    at /workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:179962:69
    at IpcIOSession.executeWithRequestId (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:179954:14)
    at IpcIOSession.executeCommand (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:179962:29)
    at IpcIOSession.onMessage (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:180004:51)
    at process.<anonymous> (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:181571:14)
    at process.emit (node:events:526:28)
    at emit (node:internal/child_process:938:14)
    at process.processTicksAndRejections (node:internal/process/task_queues:84:21)
rejected promise not handled within 1 second: Error: <semantic> TypeScript Server Error (5.0.2)
Debug Failure. False expression: Non-string value passed to `ts.resolveTypeReferenceDirective`, likely by a wrapping package working with an outdated `resolveTypeReferenceDirectives` signature. This is probably not a problem in TS itself.
Error: Debug Failure. False expression: Non-string value passed to `ts.resolveTypeReferenceDirective`, likely by a wrapping package working with an outdated `resolveTypeReferenceDirectives` signature. This is probably not a problem in TS itself.
    at resolveTypeReferenceDirective (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:40970:9)
    at Object.resolve (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:117449:42)
    at resolveNamesWithLocalCache (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:122873:29)
    at Object.resolveTypeReferenceDirectiveReferences (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:122938:12)
    at ConfiguredProject2.resolveTypeReferenceDirectiveReferences (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:171578:33)
    at resolveTypeReferenceDirectiveNamesWorker (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:118136:20)
    at resolveTypeReferenceDirectiveNamesReusingOldState (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:118306:14)
    at createProgram (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:117923:27)
    at synchronizeHostData (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:135400:15)
    at Object.getProgram (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:135472:5)
    at ConfiguredProject2.updateGraphWorker (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:172153:41)
    at ConfiguredProject2.updateGraph (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:172090:32)
    at ConfiguredProject2.updateGraph (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:173272:24)
    at _ProjectService.createLoadAndUpdateConfiguredProject (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:174879:13)
    at _ProjectService.assignProjectToOpenedScriptInfo (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:175970:26)
    at /workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:176250:64
    at flatMap (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:2555:17)
    at _ProjectService.applyChangesInOpenFiles (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:176250:24)
    at updateOpen (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:177395:29)
    at /workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:179962:69
    at IpcIOSession.executeWithRequestId (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:179954:14)
    at IpcIOSession.executeCommand (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:179962:29)
    at IpcIOSession.onMessage (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:180004:51)
    at process.<anonymous> (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:181571:14)
    at process.emit (node:events:526:28)
    at emit (node:internal/child_process:938:14)
    at process.processTicksAndRejections (node:internal/process/task_queues:84:21)
stack trace: Error: <semantic> TypeScript Server Error (5.0.2)
Debug Failure. False expression: Non-string value passed to `ts.resolveTypeReferenceDirective`, likely by a wrapping package working with an outdated `resolveTypeReferenceDirectives` signature. This is probably not a problem in TS itself.
Error: Debug Failure. False expression: Non-string value passed to `ts.resolveTypeReferenceDirective`, likely by a wrapping package working with an outdated `resolveTypeReferenceDirectives` signature. This is probably not a problem in TS itself.
    at resolveTypeReferenceDirective (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:40970:9)
    at Object.resolve (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:117449:42)
    at resolveNamesWithLocalCache (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:122873:29)
    at Object.resolveTypeReferenceDirectiveReferences (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:122938:12)
    at ConfiguredProject2.resolveTypeReferenceDirectiveReferences (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:171578:33)
    at resolveTypeReferenceDirectiveNamesWorker (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:118136:20)
    at resolveTypeReferenceDirectiveNamesReusingOldState (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:118306:14)
    at createProgram (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:117923:27)
    at synchronizeHostData (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:135400:15)
    at Object.getProgram (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:135472:5)
    at ConfiguredProject2.updateGraphWorker (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:172153:41)
    at ConfiguredProject2.updateGraph (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:172090:32)
    at ConfiguredProject2.updateGraph (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:173272:24)
    at _ProjectService.createLoadAndUpdateConfiguredProject (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:174879:13)
    at _ProjectService.assignProjectToOpenedScriptInfo (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:175970:26)
    at /workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:176250:64
    at flatMap (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:2555:17)
    at _ProjectService.applyChangesInOpenFiles (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:176250:24)
    at updateOpen (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:177395:29)
    at /workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:179962:69
    at IpcIOSession.executeWithRequestId (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:179954:14)
    at IpcIOSession.executeCommand (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:179962:29)
    at IpcIOSession.onMessage (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:180004:51)
    at process.<anonymous> (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:181571:14)
    at process.emit (node:events:526:28)
    at emit (node:internal/child_process:938:14)
    at process.processTicksAndRejections (node:internal/process/task_queues:84:21)
        at n.create (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/typescript-language-features/dist/extension.js:2:901289)
        at h.w (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/typescript-language-features/dist/extension.js:2:896498)
        at h.u (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/typescript-language-features/dist/extension.js:2:895563)
        at ChildProcess.<anonymous> (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/typescript-language-features/dist/extension.js:2:895195)
        at ChildProcess.emit (node:events:526:28)
        at emit (node:internal/child_process:938:14)
        at process.processTicksAndRejections (node:internal/process/task_queues:84:21)
rejected promise not handled within 1 second: Error: <semantic> TypeScript Server Error (5.0.2)
Debug Failure. False expression: Non-string value passed to `ts.resolveTypeReferenceDirective`, likely by a wrapping package working with an outdated `resolveTypeReferenceDirectives` signature. This is probably not a problem in TS itself.
Error: Debug Failure. False expression: Non-string value passed to `ts.resolveTypeReferenceDirective`, likely by a wrapping package working with an outdated `resolveTypeReferenceDirectives` signature. This is probably not a problem in TS itself.
    at resolveTypeReferenceDirective (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:40970:9)
    at Object.resolve (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:117449:42)
    at resolveNamesWithLocalCache (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:122873:29)
    at Object.resolveTypeReferenceDirectiveReferences (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:122938:12)
    at ConfiguredProject2.resolveTypeReferenceDirectiveReferences (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:171578:33)
    at resolveTypeReferenceDirectiveNamesWorker (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:118136:20)
    at resolveTypeReferenceDirectiveNamesReusingOldState (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:118306:14)
    at createProgram (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:117923:27)
    at synchronizeHostData (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:135400:15)
    at Object.getProgram (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:135472:5)
    at ConfiguredProject2.updateGraphWorker (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:172153:41)
    at ConfiguredProject2.updateGraph (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:172090:32)
    at ConfiguredProject2.updateGraph (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:173272:24)
    at _ProjectService.createLoadAndUpdateConfiguredProject (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:174879:13)
    at _ProjectService.assignProjectToOpenedScriptInfo (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:175970:26)
    at /workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:176250:64
    at flatMap (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:2555:17)
    at _ProjectService.applyChangesInOpenFiles (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:176250:24)
    at updateOpen (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:177395:29)
    at /workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:179962:69
    at IpcIOSession.executeWithRequestId (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:179954:14)
    at IpcIOSession.executeCommand (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:179962:29)
    at IpcIOSession.onMessage (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:180004:51)
    at process.<anonymous> (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:181571:14)
    at process.emit (node:events:526:28)
    at emit (node:internal/child_process:938:14)
    at process.processTicksAndRejections (node:internal/process/task_queues:84:21)
stack trace: Error: <semantic> TypeScript Server Error (5.0.2)
Debug Failure. False expression: Non-string value passed to `ts.resolveTypeReferenceDirective`, likely by a wrapping package working with an outdated `resolveTypeReferenceDirectives` signature. This is probably not a problem in TS itself.
Error: Debug Failure. False expression: Non-string value passed to `ts.resolveTypeReferenceDirective`, likely by a wrapping package working with an outdated `resolveTypeReferenceDirectives` signature. This is probably not a problem in TS itself.
    at resolveTypeReferenceDirective (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:40970:9)
    at Object.resolve (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:117449:42)
    at resolveNamesWithLocalCache (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:122873:29)
    at Object.resolveTypeReferenceDirectiveReferences (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:122938:12)
    at ConfiguredProject2.resolveTypeReferenceDirectiveReferences (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:171578:33)
    at resolveTypeReferenceDirectiveNamesWorker (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:118136:20)
    at resolveTypeReferenceDirectiveNamesReusingOldState (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:118306:14)
    at createProgram (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:117923:27)
    at synchronizeHostData (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:135400:15)
    at Object.getProgram (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:135472:5)
    at ConfiguredProject2.updateGraphWorker (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:172153:41)
    at ConfiguredProject2.updateGraph (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:172090:32)
    at ConfiguredProject2.updateGraph (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:173272:24)
    at _ProjectService.createLoadAndUpdateConfiguredProject (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:174879:13)
    at _ProjectService.assignProjectToOpenedScriptInfo (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:175970:26)
    at /workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:176250:64
    at flatMap (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:2555:17)
    at _ProjectService.applyChangesInOpenFiles (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:176250:24)
    at updateOpen (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:177395:29)
    at /workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:179962:69
    at IpcIOSession.executeWithRequestId (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:179954:14)
    at IpcIOSession.executeCommand (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:179962:29)
    at IpcIOSession.onMessage (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:180004:51)
    at process.<anonymous> (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/node_modules/typescript/lib/tsserver.js:181571:14)
    at process.emit (node:events:526:28)
    at emit (node:internal/child_process:938:14)
    at process.processTicksAndRejections (node:internal/process/task_queues:84:21)
        at n.create (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/typescript-language-features/dist/extension.js:2:901289)
        at h.w (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/typescript-language-features/dist/extension.js:2:896498)
        at h.u (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/typescript-language-features/dist/extension.js:2:895563)
        at ChildProcess.<anonymous> (/workspace/tsconfig-json-syntax-error/.vscode-test/vscode-linux-x64-1.77.1/resources/app/extensions/typescript-language-features/dist/extension.js:2:895195)
        at ChildProcess.emit (node:events:526:28)
        at emit (node:internal/child_process:938:14)
        at process.processTicksAndRejections (node:internal/process/task_queues:84:21)
```

## Expected behaviour

Syntax errors in tsconfig.json are handled gracefully without crashing the typescript server. An error message for the syntax error should be displayed. No unrelated error messages should be displayed.

## Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/SimonSiefke/tsconfig-json-syntax-error)
