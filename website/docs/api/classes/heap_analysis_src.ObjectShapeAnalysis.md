---
id: "heap_analysis_src.ObjectShapeAnalysis"
title: "Class: ObjectShapeAnalysis"
sidebar_label: "ObjectShapeAnalysis"
custom_edit_url: null
---

[heap-analysis/src](../modules/heap_analysis_src.md).ObjectShapeAnalysis

## Hierarchy

- [`BaseAnalysis`](heap_analysis_src.BaseAnalysis.md)

  ↳ **`ObjectShapeAnalysis`**

## Constructors

### <a id="new objectshapeanalysis"></a>**new ObjectShapeAnalysis**()

## Methods

### <a id="analyzesnapshotfromfile"></a>**analyzeSnapshotFromFile**(`file`)

 * **Parameters**:
    * `file`: `string`
 * **Returns**: `Promise`<`any`\>
 * **Source**:
    * heap-analysis/src/BaseAnalysis.ts:52

___

### <a id="analyzesnapshotsindirectory"></a>**analyzeSnapshotsInDirectory**(`directory`)

 * **Parameters**:
    * `directory`: `string`
 * **Returns**: `Promise`<`any`\>
 * **Source**:
    * heap-analysis/src/BaseAnalysis.ts:62

___

### <a id="getcommandname"></a>**getCommandName**()

 * **Returns**: `string`
 * **Source**:
    * heap-analysis/src/plugins/ObjectShapeAnalysis.ts:19

___

### <a id="getdescription"></a>**getDescription**()

 * **Returns**: `string`
 * **Source**:
    * heap-analysis/src/plugins/ObjectShapeAnalysis.ts:23

___

### <a id="getoptions"></a>**getOptions**()

 * **Returns**: `default`[]
 * **Source**:
    * heap-analysis/src/plugins/ObjectShapeAnalysis.ts:27

___

### <a id="process"></a>**process**(`options`)

 * **Parameters**:
    * `options`: [`HeapAnalysisOptions`](../modules/heap_analysis_src.md#heapanalysisoptions)
 * **Returns**: `Promise`<`void`\>
 * **Source**:
    * heap-analysis/src/plugins/ObjectShapeAnalysis.ts:31

___

### <a id="run"></a>**run**(`options?`)

 * **Parameters**:
    * `options`: [`HeapAnalysisOptions`](../modules/heap_analysis_src.md#heapanalysisoptions) | `pluginUtils.defaultAnalysisArgs`
 * **Returns**: `Promise`<`any`\>
 * **Source**:
    * heap-analysis/src/BaseAnalysis.ts:45